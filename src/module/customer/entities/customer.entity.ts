import { BaseEntity } from 'src/core/base/entity/entity.base';
import { Invoice } from 'src/module/invoice/entities/invoice.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';

@Entity('customers')
export class Customer extends BaseEntity {

  @CreateDateColumn()
  createTs: Date;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  userId: string;

  @Column({ nullable: true })
  organizationId: string;

  @OneToMany(() => Invoice, invoice => invoice.customer)
  invoices: Invoice[];
}