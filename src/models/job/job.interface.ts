import { User } from "../user/user.interface";

export interface Job {
    id: number;
    title: string;
    price: number;
    createdAt: Date;
    description: string;
    image: string;
    isActive: boolean;
    user: User;
}