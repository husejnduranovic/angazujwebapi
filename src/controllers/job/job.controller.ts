import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { Observable } from "rxjs";
import { Job } from "src/models/job/job.interface";
import { CreateJobUseCase } from "src/usecases/job/CreateJobUseCase";
import { FindAllJobsUseCase } from "src/usecases/job/FindAllJobsUseCase";

@Controller('job')
export class JobController {

    constructor(
        private readonly createJobUseCase: CreateJobUseCase,
        private readonly findAllJobsUseCase: FindAllJobsUseCase
    ){}

    @UseGuards()
    @Post()
    create(@Body() job: Job){
        return this.createJobUseCase.execute(job);
    }

    @UseGuards()
    @Get()
    get(): Observable<Job[]>{
        return this.findAllJobsUseCase.execute();
    }
}