import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class GeneratePhoneOtpInput {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    phoneNumber!: string;
}

export { GeneratePhoneOtpInput as GeneratePhoneOtpInput };