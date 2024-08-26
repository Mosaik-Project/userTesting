import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class EmailOtpValidationInput {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    email!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    otp!: string;
}

export { EmailOtpValidationInput as EmailOtpValidationInput };