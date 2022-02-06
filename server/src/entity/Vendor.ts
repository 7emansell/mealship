import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Voucher } from "./Voucher";

@Entity()
export class Vendor {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  companyName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Voucher, (voucher) => voucher.vendor)
  vouchers: Voucher[];
}
