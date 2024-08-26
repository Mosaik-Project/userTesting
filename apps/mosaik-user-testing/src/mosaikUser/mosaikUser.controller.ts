import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MosaikUserService } from "./mosaikUser.service";
import { MosaikUserControllerBase } from "./base/mosaikUser.controller.base";

@swagger.ApiTags("mosaikUsers")
@common.Controller("mosaikUsers")
export class MosaikUserController extends MosaikUserControllerBase {
  constructor(
    protected readonly service: MosaikUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
