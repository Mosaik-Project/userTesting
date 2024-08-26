import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class VerifyPhoneOtpInput {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    phoneNumber!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    otp!: string;
}

export { VerifyPhoneOtpInput as VerifyPhoneOtpInput };