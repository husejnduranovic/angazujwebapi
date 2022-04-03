import { Injectable } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { User } from "src/models/user/user.interface";
import { AuthRepository } from "src/repositories/auth.repository";

@Injectable()
export class LoginUseCase {
    constructor(
        private readonly authRepository: AuthRepository
    ){}

    execute(user: User): Observable< {token: string} > {
        return this.authRepository
                   .login(user)
                   .pipe(map((jwt: string) => ({ token: jwt })));
    }
}