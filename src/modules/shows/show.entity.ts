import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { language } from '../utils/language.enum';


@Entity()
export class Movie extends BaseEntity{


@Column({type:'varchar', length:30})
title:string;

@Column({type:'timestamp', length:30})
startTime : Date ;

@Column({type:'timestamp', length:30})
endTime :Date;

@Column({type : 'enum', enum:language, default : language.HINDI})
language:language;

}