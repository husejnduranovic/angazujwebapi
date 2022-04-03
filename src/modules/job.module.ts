import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JobController } from "src/controllers/job/job.controller";
import { JobEntity } from "src/models/job/job.entity";
import { JobRepository } from "src/repositories/job.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([JobEntity])
    ],
    providers: [JobRepository],
    controllers: [JobController]
})

export class JobModule {}