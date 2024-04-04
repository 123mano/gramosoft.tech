import { E0, EM100 } from "src/constant";

export class handleResponse{
    static buildSuccessObj(code: number, message: string, data?: any): any {
        const res: any = {
          code: code,
          status: true,
          message: message,
          data: data || null,
        };
        return res;
      }
      static buildErrObj(code?: any, message?: any, error?: any) {
        console.error('error===>' + error);
        // console.trace()
       // code = code ?? 500;
        // For other types of errors, you can handle them accordingly
          return {
            code: code || 500,
            status: E0,
            message: error?.message || EM100,
            error: error,
          };
        }
      }
      

export const ALLOWED_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
export const ALLOWED_URLS = ['https://www.gramosoft.tech/','https://gramosoft.tech/'];