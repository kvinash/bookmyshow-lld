import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { Cast } from '../casts/cast.entity';


@Entity()
export class Movie extends BaseEntity{

@PrimaryGeneratedColumn()
id : number;

@Column({type:'varchar', length:30})
title:string;

@Column({type:'varchar', length:30})
language:string;

@ManyToMany(()=>Cast)
@JoinTable()
cast : Cast[]


}