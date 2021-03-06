import { Injectable } from "@nestjs/common";
import { from, Observable } from "rxjs";
import { map, switchMap } from 'rxjs/operators';

import * as bcrypt from 'bcrypt';
import { User } from "../models/user/user.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../models/user/user.entity";
import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";

@Injectable()
export class AuthRepository{

    constructor(
        @InjectRepository(UserEntity) 
        private readonly userRepository: Repository<UserEntity>,
        private jwtService: JwtService
    ){}

    hashPassword(password: string): Observable<string> {
        return from(bcrypt.hash(password, 12));
    }

    registerAccount(user: User): Observable<User> {
        const { firstName, lastName, email, password } = user;

        return this.hashPassword(password).pipe(
            switchMap((hashedPassword: string) => {
                return from(this.userRepository.save({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword
                }))
            })
        ).pipe(
            map((user: User) => {
                delete user.password;
                return user;
            })
        )
    }

    validateUser(email: string, password: string): Observable<User>{
        return from(
            this.userRepository.findOne(
                {
                    select: { firstName: true, lastName: true, password: true, email: true},
                    where: { email: email }
                }
            )
        ).pipe(
            switchMap((user: User) => {
                return from(bcrypt.compare(password, user.password)).pipe(
                    map((isValidPassword: boolean) => {
                        if (isValidPassword) {
                            delete user.password;
                            return user;
                        }
                    })
                );
            })
        )
    }

    login(user: User): Observable<string>{
        const { email, password } = user;

        return this.validateUser(email, password).pipe(
            switchMap((user: User) => {
                if(user){
                    return from(this.jwtService.signAsync({ user }))
                }
            })
        )
    }
}