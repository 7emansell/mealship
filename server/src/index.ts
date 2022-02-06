import "reflect-metadata";
import express from "express";
import { Recipient } from "./entity/Recipient";
import { createConnection, getRepository } from "typeorm";
import { Donor } from "./entity/Donor";
import { Voucher } from "./entity/Voucher";
import { Vendor } from "./entity/Vendor";

createConnection().then((connection) => {
  const app = express();
  const port = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  const donorRepository = connection.getRepository(Donor);
  const recipientRepository = connection.getRepository(Recipient);
  const voucherRepository = connection.getRepository(Voucher);
  const vendorRepository = connection.getRepository(Vendor);

  // Sign up endpoints
  app.post("/donor-signup", async (req, res) => {
    const { body } = req;

    const donor = donorRepository.create({
      name: body.name,
      email: body.email,
      password: body.password,
    });

    const donorData = await donorRepository.save(donor);

    return res.json(donorData);
  });

  app.post("/recipient-signup", async (req, res) => {
    const { username, password } = req.body;

    // This is NOT the final implementation
    // This generates a random need score for the recipient
    // since we don't yet have our algorithm to determine need
    const need = Math.floor(Math.random() * 11);

    const recipient = recipientRepository.create({
      username,
      password,
      need,
    });

    const recipientData = await recipientRepository.save(recipient);

    return res.json(recipientData);
  });

  app.post("/vendor-signup", async (req, res) => {
    const { companyName, email, password } = req.body;

    const vendor = vendorRepository.create({
      companyName: companyName,
      email: email,
      password: password,
    });

    const vendorData = await vendorRepository.save(vendor);

    return res.json(vendorData);
  });

  app.post("/request-a-meal", async (req, res) => {
    const { recipientId } = req.body;

    const recipient = await recipientRepository.update(recipientId, {
      isMealRequested: true,
    });

    return res.json(recipient);
  });

  // Donor - Donation
  app.post("/donate", async (req, res) => {
    const { donorId, vendorId, messageFromDonor } = req.body;

    // Get the corresponding donor
    const donor = await donorRepository.findOne(donorId);

    if (!donor) {
      return res.status(404).send("Donor not found");
    }

    // Get the corresponding recipient
    const recipient = (
      await recipientRepository.find({
        where: {
          isMealRequested: true,
        },
        order: {
          need: "DESC",
        },
        take: 1,
      })
    )[0];

    if (!recipient) {
      return res.status(404).send("Recipient not found");
    }

    // Get the corresponding vendor
    const vendor = await vendorRepository.findOne(vendorId);

    if (!vendor) {
      return res.status(404).send("Vendor not found");
    }

    // Create the voucher
    const voucher = voucherRepository.create({
      donor,
      recipient,
      vendor,
      messageFromDonor,
    });

    const voucherData = await voucherRepository.save(voucher);

    return res.json(voucherData);
  });

  // Voucher Transaction
  app.post("/transaction", async (req, res) => {
    const { voucherId, purchaseAmount } = req.query;

    const voucher = await voucherRepository.findOne(voucherId.toString());

    if (!voucher) {
      return res.status(404).send("Voucher not found");
    }

    voucher.isRedeemed = true;
    voucher.purchaseAmount = purchaseAmount.toString();

    const voucherData = await voucherRepository.save(voucher);

    return res.json(voucherData);
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
