import { ApiProperty } from "@nestjs/swagger";


export class AddDto {
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


  @ApiProperty({
    description: "Enter Name",
    required: true,
    type: String,
  })
  
  name: string;
  /**
   * Last Name
   * @type String
   */
  @ApiProperty({
    description: "Enter address",
    required: true,
  })
  
  address: string;

  }
