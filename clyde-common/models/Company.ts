import { Address } from './_shared/Address'

export class Company {
    public Name: string;
    public Address: Address;

    constructor() {  
      this.Address = new Address();
    }
  }