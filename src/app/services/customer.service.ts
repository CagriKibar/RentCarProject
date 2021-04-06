import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/ListResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44386/api/customers/getall';

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Customer>> {
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
    
    };
  }