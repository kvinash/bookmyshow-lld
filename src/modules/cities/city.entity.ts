import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity()

export class City extends BaseEntity{


@Column({type:'varchar', length:30})
name:string;

@Column({type:'varchar'})
pincode:number;


}