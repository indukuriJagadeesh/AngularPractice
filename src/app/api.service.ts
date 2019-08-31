import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://localhost:8080/users';

  constructor(private httpClient: HttpClient) { }

  public getCustomers() {
    return this.httpClient.get<Customer[]>(this.apiURL);
  }

  
}
