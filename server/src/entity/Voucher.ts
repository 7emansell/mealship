import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Donor } from "./Donor";
import { Recipient } from "./Recipient";
import { Vendor } from "./Vendor";

@Entity()
export class Voucher {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @ManyToOne(() => Donor, (donor) => donor.vouchers)
  donor: Donor;

  @ManyToOne(() => Vendor, (vendor) => vendor.vouchers)
  vendor: Vendor;

  @ManyToOne(() => Recipient, (recipient) => recipient.vouchers)
  recipient: Recipient;

  @Column({ default: false })
  isRedeemed: boolean;

  @Column()
  messageFromDonor: string;

  @Column({ default: null, nullable: true })
  messageFromRecipient: string;

  @Column({ default: null, nullable: true })
  purchaseAmount: string;
}
