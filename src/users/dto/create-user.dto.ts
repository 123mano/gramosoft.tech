import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, Length, Max, Min } from 'class-validator';
export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    full_name?: string

    @ApiProperty()
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email?: string

    @ApiProperty()
    @IsOptional()
    @IsNumberString()
    @Length(10, 10, { message: 'Mobile number must be exactly 10 digits' })
    mobile_number?: string;


    @ApiProperty()
    @IsString()
    @IsOptional()
    company_name?: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    budget?: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    service?: string







}
