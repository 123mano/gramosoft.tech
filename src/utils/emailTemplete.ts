import { CreateUserDto } from "src/users/dto/create-user.dto";

export class emailtempleteService {
    static emailtemplete(data: CreateUserDto) {
        let {
            full_name, email, mobile_number, service, company_name, budget
        } = data;
        let phone = mobile_number ? `<p>Mobile: ${mobile_number}</p>` : ``;
        let services = service ? `<p>Service: ${service}</p>` : ``;
        let companyName = company_name ? `<p>Company Name: ${company_name}</p>` : ``;
        let budgetAmount = budget ? `<p>Budget Amount: ${budget}</p>` : ``;


        let html = `<h1>The following customer tried contacting us</h1>
    <p>User Name: ${full_name}</p>
    <p>Email: ${email}</p>
      ${phone}
      ${services}
      ${companyName}
      ${budgetAmount}`;
        return html;
    }

    static EMAIL_DATA = {
        SUBJECT_USER: 'Thank you for contacting Gramosoft',
        SUBJECT_COMPANY: 'The following customer tried contacting us',
        TEXT: 'text',
    };
}
