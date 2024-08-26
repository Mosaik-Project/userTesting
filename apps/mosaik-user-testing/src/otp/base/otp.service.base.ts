/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Otp as PrismaOtp } from "@prisma/client";
import { OtpCreateInput } from "./OtpCreateInput";
import { Otp } from "./Otp";
import { DeleteOtpArgs } from "./DeleteOtpArgs";
import { OtpWhereUniqueInput } from "./OtpWhereUniqueInput";
import { GenerateEmailOtpInput } from "../GenerateEmailOtpInput";
import { GeneratePhoneOtpInput } from "../GeneratePhoneOtpInput";
import { OtpUpdateInput } from "./OtpUpdateInput";
import { VerifyEmailOtpInput } from "../VerifyEmailOtpInput";
import { VerifyPhoneOtpInput } from "../VerifyPhoneOtpInput";

export class OtpServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.OtpCountArgs, "select">): Promise<number> {
    return this.prisma.otp.count(args);
  }

  async otps(args: Prisma.OtpFindManyArgs): Promise<PrismaOtp[]> {
    return this.prisma.otp.findMany(args);
  }
  async otp(args: Prisma.OtpFindUniqueArgs): Promise<PrismaOtp | null> {
    return this.prisma.otp.findUnique(args);
  }
  async createOtp(args: Prisma.OtpCreateArgs): Promise<PrismaOtp> {
    return this.prisma.otp.create(args);
  }
  async updateOtp(args: Prisma.OtpUpdateArgs): Promise<PrismaOtp> {
    return this.prisma.otp.update(args);
  }
  async deleteOtp(args: Prisma.OtpDeleteArgs): Promise<PrismaOtp> {
    return this.prisma.otp.delete(args);
  }
  async CreateOtp(args: OtpCreateInput): Promise<Otp> {
    throw new Error("Not implemented");
  }
  async DeleteOtp(args: DeleteOtpArgs): Promise<Otp> {
    throw new Error("Not implemented");
  }
  async FindOtp(args: OtpWhereUniqueInput): Promise<Otp> {
    throw new Error("Not implemented");
  }
  async GenerateEmailOtp(args: GenerateEmailOtpInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async GeneratePhoneOtp(args: GeneratePhoneOtpInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateOtp(args: OtpUpdateInput): Promise<Otp> {
    throw new Error("Not implemented");
  }
  async VerifyEmailOtp(args: VerifyEmailOtpInput): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async VerifyPhoneOtp(args: VerifyPhoneOtpInput): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
