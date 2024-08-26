import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MosaikUserModuleBase } from "./base/mosaikUser.module.base";
import { MosaikUserService } from "./mosaikUser.service";
import { MosaikUserController } from "./mosaikUser.controller";

@Module({
  imports: [MosaikUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [MosaikUserController],
  providers: [MosaikUserService],
  exports: [MosaikUserService],
})
export class MosaikUserModule {}
