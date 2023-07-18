import type { VehicleDetail } from '@/types/VehicleDetail';

type EmailSellerFields = {
  message: string;
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
  interestOptions: string[];
  source: string;
  recaptchaResponse: string;
};

/**
 * TOL Email module's methods == "EmailSeller" || "EmailDealer" in handleSubmit
 */
export const submitEmailSellerForm = async (fields: EmailSellerFields, vehicleDetail: VehicleDetail) => {
  // TODO: see if we can remove some of the name duplication
  const fullName = [fields.firstName, fields.lastName].filter((name) => name).join(' ');
  const data = {
    'adId': vehicleDetail.id,
    'dealerId': vehicleDetail.dealerId,
    'email': fields.email,
    'first_name': fields.firstName,
    'full_name': fullName,
    'g-recaptcha-response': fields.recaptchaResponse,
    'interestOptions[]': fields.interestOptions,
    'last_name': fields.lastName,
    'message': fields.message,
    'name': fullName,
    'phone': fields.phone,
    'price': vehicleDetail.price,
    'source': fields.source,
  };

  let emailResponse = null;

  await (window as any).$.ajax({
    data: data,
    success(response: any) {
      emailResponse = JSON.parse(response);
    },
    type: 'POST',
    url: '/Gettiledata/emailseller/sendemail/',
  });

  return emailResponse;
};
