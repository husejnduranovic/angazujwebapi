import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { JobEntity } from "src/models/job/job.entity";
import { Repository } from "typeorm";

@Injectable()
export class JobRepository {

    constructor(
        @InjectRepository(JobEntity)
        private readonly jobRepository: Repository<JobEntity>
    ){}
}