import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../components/complex-types/carDetailDto';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44386/api/';

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
    
    };
    getCarsDetail(): Observable<ListResponseModel<CarDetail>>{
      return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl+"cars/getcardetails");

    }
    getCarByBrand(brandId:number):Observable<ListResponseModel<Car>>{
      let newPath=this.apiUrl+"cars/getbybrand?brandId="+brandId
      return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
    }

    add(car:Car):Observable<ResponseModel>{
      return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
    }
  }


