import { Company } from './Company';

export class User {
  public Id: number;
  public Name: string;
  public Email: string;
  public Password: string;
  public Phone: number;
  public Role: string;
  public Company: Company;
  
  constructor() { 
      this.Company = new Company();
  }
  
  }