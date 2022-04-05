import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JobController } from "src/controllers/job/job.controller";
import { JobEntity } from "src/models/job/job.entity";
import { JobRepository } from "src/repositories/job.repository";
import { CreateJobUseCase } from "src/usecases/job/CreateJobUseCase";
import { FindAllJobsUseCase } from "src/usecases/job/FindAllJobsUseCase";

@Module({
    imports: [
        TypeOrmModule.forFeature([JobEntity])
    ],
    providers: [JobRepository, CreateJobUseCase, FindAllJobsUseCase],
    controllers: [JobController]
})

export class JobModule {}