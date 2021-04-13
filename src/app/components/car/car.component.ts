import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { HttpClient } from '@angular/common/http';
 
import { from } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { CarDetailDto } from '../complex-types/carDetailDto';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  
  colors:Color[]=[];
  cars: CarDetail[]=[];
  car:Car[]=[]
  carsDetail:CarDetail[]=[];
  carImages:CarImage[]=[]; 
  imageUrl='https://localhost:44386/api/';
  
  dataLoaded=false; 
  filterText="";

  constructor(private carService:CarService,
     private activatedRoute:ActivatedRoute,
     private tostrService:ToastrService,
     private cartService:CartService,
     private carImageService:CarImageService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
     this.getCars();
    })


  }

  addToCart(car:Car){
    this.tostrService.success("Sepete Eklendi",car.carName)
    this.cartService.addToCart(car);
    
  }

  getCars() {
   this.carService.getCars().subscribe(response=>{
     this.cars=response.data;
     console.log(response.data)
     this.dataLoaded=true;
     
   })
  }
  getCarsByBrand(brandId:number) {
    this.carService.getCarByBrand(brandId).subscribe(response=>{
      this.car=response.data
      this.dataLoaded=true;
    })
    
   }
   getCarsDetail(){
     this.carService.getCarsDetail().subscribe(
       Response=>{
        

        this.carsDetail=Response.data
        console.log(Response.data)
         this.dataLoaded=true;
       }
     )
   }
   getCarImages(){
    this.carImageService.getCarImages().subscribe(response =>{
      this.carImages = response.data;
      this.dataLoaded=true;
    })

    
  }
  

  getImagesByCarId(carId:number){
    this.carImageService.getImagesByCarId(carId).subscribe(response=>{
      this.carImages=response.data
    })
  }
  
}

