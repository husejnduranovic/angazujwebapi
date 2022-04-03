import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "../controllers/auth/auth.controller";
import { JwtGuard } from "../auth/guards/jwt.guard";
import { JwtStrategy } from "../auth/guards/jwt.strategy";
import { UserEntity } from "../models/user/user.entity";
import { AuthRepository } from "../repositories/auth.repository";
import { RegisterUseCase } from "src/usecases/auth/RegisterUseCase";
import { LoginUseCase } from "src/usecases/auth/LoginUseCase";

@Module({
    imports: [
        JwtModule.registerAsync({
            useFactory: async () => ({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '3600s' }
            })
        }),
        TypeOrmModule.forFeature([UserEntity])
    ],
    providers: [AuthRepository, JwtGuard, JwtStrategy, RegisterUseCase, LoginUseCase],
    controllers: [AuthController]
})

export class AuthModule {}