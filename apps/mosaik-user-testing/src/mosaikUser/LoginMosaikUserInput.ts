import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class LoginMosaikUserInput {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    emailOrPhone!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    password!: string;
}

export { LoginMosaikUserInput as LoginMosaikUserInput };