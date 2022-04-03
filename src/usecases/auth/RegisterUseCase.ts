import { Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { User } from "src/models/user/user.interface";
import { AuthRepository } from "src/repositories/auth.repository";

@Injectable()
export class RegisterUseCase {

    constructor(
        private readonly authRepository: AuthRepository
    ){}

    execute(user: User): Observable<User> {
        return this.authRepository.registerAccount(user);
    }
}