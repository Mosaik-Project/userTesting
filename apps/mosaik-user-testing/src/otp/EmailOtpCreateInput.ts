import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class EmailOtpCreateInput {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    email!: string;
}

export { EmailOtpCreateInput as EmailOtpCreateInput };