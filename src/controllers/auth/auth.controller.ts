import { Body, Controller, Get, Post } from "@nestjs/common";
import { from, map, Observable } from "rxjs";
import { LoginUseCase } from "src/usecases/auth/LoginUseCase";
import { RegisterUseCase } from "src/usecases/auth/RegisterUseCase";
import { User } from "../../models/user/user.interface";

@Controller('auth')
export class AuthController {

    constructor(
        private readonly createUser: RegisterUseCase,
        private readonly loginUser: LoginUseCase
    ){}

    @Post('register')
    create(@Body() user: User): Observable<User> {
        return this.createUser.execute(user);
    }

    @Post('login')
    login(@Body() user: User): Observable< {token: string} > {
        return this.loginUser.execute(user);
    }
}