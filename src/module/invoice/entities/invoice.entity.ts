
import { BaseEntity } from 'src/core/base/entity/entity.base';
import { Customer } from 'src/module/customer/entities/customer.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

export enum InvoiceStatus {
  OPEN = 'open',
  PAID = 'paid',
  VOID = 'void',
  UNCOLLECTIBLE = 'uncollectible'
}

@Entity('invoices')
export class Invoice extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createTs: Date;

  @Column()
  value: number;

  @Column()
  description: string;

  @Column()
  userId: string;

  @Column({ nullable: true })
  organizationId: string;

  @Column()
  customerId: number;

  @Column({
    type: 'enum',
    enum: InvoiceStatus,
  })
  status: InvoiceStatus;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customerId' })
  customer: Customer;
}