import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class GenerateEmailOtpInput {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    email!: string;
}

export { GenerateEmailOtpInput as GenerateEmailOtpInput };