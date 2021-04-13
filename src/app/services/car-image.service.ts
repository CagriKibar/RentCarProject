import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';

import { CarImage } from '../models/carImage';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = 'https://localhost:44386/api/';

  constructor(private httpClient:HttpClient) { }


getCarImages():Observable<ListResponseModel<CarImage>>{
  return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl+"carImages/getall")
}
add(carImage:CarImage):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"carImages/add",carImage)
}

delete(carImage:CarImage):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"carImages/delete",carImage)
}
update(carImage:CarImage):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"carImages/update",carImage)
}

getImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
  return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl+"carImages/getimagesbycarid?carId=" + carId)
}

}
