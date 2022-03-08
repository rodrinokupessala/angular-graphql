import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Groups extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
