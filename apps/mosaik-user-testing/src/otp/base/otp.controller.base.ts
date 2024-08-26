/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { OtpService } from "../otp.service";
import { Public } from "../../decorators/public.decorator";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { OtpCreateInput } from "./OtpCreateInput";
import { Otp } from "./Otp";
import { OtpFindManyArgs } from "./OtpFindManyArgs";
import { OtpWhereUniqueInput } from "./OtpWhereUniqueInput";
import { OtpUpdateInput } from "./OtpUpdateInput";
import { PhoneOtpValidationInput } from "../PhoneOtpValidationInput";
import { EmailOtpCreateInput } from "../EmailOtpCreateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OtpControllerBase {
  constructor(
    protected readonly service: OtpService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @Public()
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Otp })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createOtp(@common.Body() data: OtpCreateInput): Promise<Otp> {
    return await this.service.createOtp({
      data: data,
      select: {
        code: true,
        createdAt: true,
        email: true,
        expiresAt: true,
        id: true,
        phone: true,
        purpose: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Otp] })
  @ApiNestedQuery(OtpFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Otp",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async otps(@common.Req() request: Request): Promise<Otp[]> {
    const args = plainToClass(OtpFindManyArgs, request.query);
    return this.service.otps({
      ...args,
      select: {
        code: true,
        createdAt: true,
        email: true,
        expiresAt: true,
        id: true,
        phone: true,
        purpose: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Otp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Otp",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async otp(@common.Param() params: OtpWhereUniqueInput): Promise<Otp | null> {
    const result = await this.service.otp({
      where: params,
      select: {
        code: true,
        createdAt: true,
        email: true,
        expiresAt: true,
        id: true,
        phone: true,
        purpose: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Otp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Otp",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateOtp(
    @common.Param() params: OtpWhereUniqueInput,
    @common.Body() data: OtpUpdateInput
  ): Promise<Otp | null> {
    try {
      return await this.service.updateOtp({
        where: params,
        data: data,
        select: {
          code: true,
          createdAt: true,
          email: true,
          expiresAt: true,
          id: true,
          phone: true,
          purpose: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Otp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Otp",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteOtp(
    @common.Param() params: OtpWhereUniqueInput
  ): Promise<Otp | null> {
    try {
      return await this.service.deleteOtp({
        where: params,
        select: {
          code: true,
          createdAt: true,
          email: true,
          expiresAt: true,
          id: true,
          phone: true,
          purpose: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }


  @Public()
  @common.Post("/generate-email-otp")
  @swagger.ApiCreatedResponse({ type: Otp })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GenerateEmailOtp(
    @common.Body()
    body: EmailOtpCreateInput
  ): Promise<Otp> {
    return this.service.GenerateEmailOtp(body);
  }

  // @common.Post("/generate-otp")
  // @swagger.ApiOkResponse({
  //   type: Otp,
  // })
  // @swagger.ApiNotFoundResponse({
  //   type: errors.NotFoundException,
  // })
  // @swagger.ApiForbiddenResponse({
  //   type: errors.ForbiddenException,
  // })
  // async GenerateOtp(
  //   @common.Body()
  //   body: PhoneOtpValidationInput
  // ): Promise<Otp> {
  //   return this.service.GenerateOtp(body);
  // }

  @common.Post("/generate-phone-otp")
  @swagger.ApiOkResponse({
    type: Otp,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GeneratePhoneOtp(
    @common.Body()
    body: PhoneOtpValidationInput
  ): Promise<Otp> {
    return this.service.GeneratePhoneOtp(body);
  }

  @common.Post("/validate-email-otp")
  @swagger.ApiOkResponse({
    type: Otp,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ValidateEmailOtp(
    @common.Body()
    body: PhoneOtpValidationInput
  ): Promise<Otp> {
    return this.service.ValidateEmailOtp(body);
  }

  // @common.Post("/validate-otp")
  // @swagger.ApiOkResponse({
  //   type: Otp,
  // })
  // @swagger.ApiNotFoundResponse({
  //   type: errors.NotFoundException,
  // })
  // @swagger.ApiForbiddenResponse({
  //   type: errors.ForbiddenException,
  // })
  // async ValidateOtp(
  //   @common.Body()
  //   body: PhoneOtpValidationInput
  // ): Promise<Otp> {
  //   return this.service.ValidateOtp(body);
  // }

  @common.Post("/validate-phone-otp")
  @swagger.ApiOkResponse({
    type: Otp,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ValidatePhoneOtp(
    @common.Body()
    body: PhoneOtpValidationInput
  ): Promise<Otp> {
    return this.service.ValidatePhoneOtp(body);
  }
}
