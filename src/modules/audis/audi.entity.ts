import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../common/base.entity';


@Entity()
export class Movie extends BaseEntity{

@PrimaryGeneratedColumn()
id : number;

@Column({type:'varchar', length:30})
title:string;

@Column({type:'varchar', length:30})
language:string;

}