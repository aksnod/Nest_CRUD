import { ApiProperty } from "@nestjs/swagger";


export class commonDto {
  /**
   * Email
   * @type String
   */
  @ApiProperty({
    description: "Enter email",
    required: true,
    type: String,
  })
  
  email: string;
}