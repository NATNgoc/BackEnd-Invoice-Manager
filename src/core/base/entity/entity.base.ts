import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Expose } from 'class-transformer';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @CreateDateColumn()
  @Expose()
  created_at: Date;

  @UpdateDateColumn()
  @Expose()
  updated_at: Date;

  @DeleteDateColumn()
  @Expose()
  deleted_at: Date;
}