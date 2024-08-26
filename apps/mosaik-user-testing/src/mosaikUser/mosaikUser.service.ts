import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordService } from "../auth/password.service";
import { MosaikUserServiceBase } from "./base/mosaikUser.service.base";
import { TokenService } from "src/auth/token.service";

@Injectable()
export class MosaikUserService extends MosaikUserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService,
    protected readonly tokenService :TokenService

  ) {
    super(prisma, passwordService, tokenService);
  }
}
