export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  shipping: string;
  createdOn: string;
  active: boolean;
  tags:string[];
  roles:string[];
  title:string;
}