import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity()
export class Theatre extends BaseEntity{


@Column({type:'varchar', length:30})
name:string;

@Column({type:'varchar', length:30})
city:string;

@Column({type:'varchar', length:30})
address: string;


}