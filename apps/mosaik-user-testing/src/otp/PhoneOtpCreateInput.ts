import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class PhoneOtpCreateInput {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    phoneNumber!: string;
}

export { PhoneOtpCreateInput as PhoneOtpCreateInput };