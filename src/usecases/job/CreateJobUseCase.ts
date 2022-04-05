import { Injectable } from "@nestjs/common";
import { from, Observable } from "rxjs";
import { JobEntity } from "src/models/job/job.entity";
import { Job } from "src/models/job/job.interface";
import { JobRepository } from "src/repositories/job.repository";

@Injectable()
export class CreateJobUseCase {

    constructor(
        private readonly jobRepository: JobRepository
    ){}

    execute(job: Job): Observable<JobEntity> {
        return from(this.jobRepository.createJob(job));
    }
}