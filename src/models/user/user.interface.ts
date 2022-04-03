import { Job } from "../job/job.interface";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    job: Job[];
}