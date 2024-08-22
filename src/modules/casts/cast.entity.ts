import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../common/base.entity';


@Entity()
export class Cast extends BaseEntity{

@Column({type : 'varchar'})
name : string ;


}