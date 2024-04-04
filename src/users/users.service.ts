import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { emailtempleteService } from 'src/utils/emailTemplete';
import { MailOptions, MailUtils } from 'src/utils/mailUtils';
import { SENDER_EMAIL_ADDRESS } from 'src/constant';

@Injectable()
export class UsersService {
  constructor(private readonly MailUtilsService: MailUtils) { }
  async contactUs(createUserDto: CreateUserDto) {
    await this.mailtoCompany(createUserDto); //company email here
    return;
  }

  async mailtoCompany(data: CreateUserDto) {
    let htmlContent = emailtempleteService.emailtemplete(data);
    let mailOptions: MailOptions = {
      to: SENDER_EMAIL_ADDRESS,
      subject: emailtempleteService.EMAIL_DATA.SUBJECT_COMPANY,
      text: emailtempleteService.EMAIL_DATA.TEXT,
      html: htmlContent,
    };
    await this.MailUtilsService.sendEmail(mailOptions);
  }
}
