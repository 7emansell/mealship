import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Voucher } from "./Voucher";

@Entity()
export class Recipient {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  need: number;

  @OneToMany(() => Voucher, (voucher) => voucher.recipient)
  vouchers: Voucher[];

  @Column({ default: false })
  isMealRequested: boolean;
}
