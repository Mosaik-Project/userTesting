import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OtpModuleBase } from "./base/otp.module.base";
import { OtpService } from "./otp.service";
import { OtpController } from "./otp.controller";

@Module({
  imports: [OtpModuleBase, forwardRef(() => AuthModule)],
  controllers: [OtpController],
  providers: [OtpService],
  exports: [OtpService],
})
export class OtpModule {}
