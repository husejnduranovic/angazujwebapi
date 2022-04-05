import { Injectable } from "@nestjs/common";
import { from, Observable } from "rxjs";
import { Job } from "src/models/job/job.interface";
import { JobRepository } from "src/repositories/job.repository";

@Injectable()
export class FindAllJobsUseCase{

    constructor(
        private readonly jobRepository: JobRepository
    ) {}

    execute(): Observable<Job[]> {
        return from(this.jobRepository.findAllJobs());
    }
}