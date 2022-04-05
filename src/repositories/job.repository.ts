import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { JobEntity } from "src/models/job/job.entity";
import { Job } from "src/models/job/job.interface";
import { Repository } from "typeorm";

@Injectable()
export class JobRepository {

    constructor(
        @InjectRepository(JobEntity)
        private readonly jobRepository: Repository<JobEntity>
    ){}

    createJob(job: Job): Observable<Job> {
        return from(this.jobRepository.save(job));
    }

    findAllJobs(): Observable<Job[]> {
        return from(this.jobRepository.find());
    }
}