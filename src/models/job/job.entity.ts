import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../user/user.entity";
import { User } from "../user/user.interface";

@Entity('job')
export class JobEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    price: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    isActive: boolean;

    @ManyToOne(() => UserEntity, user => user.id)
    user: User;

}