import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Voucher } from "./Voucher";

@Entity()
export class Donor {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Voucher, (voucher) => voucher.donor)
  vouchers: Voucher[];
}
