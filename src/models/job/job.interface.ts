export interface Job {
    id: number;
    userId: number;
    title: string;
    price: number;
    createdAt: Date;
    description: string;
    image: string;
    isActive: boolean;
}