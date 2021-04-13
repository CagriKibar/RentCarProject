import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
 
  carsDetail:CarDetail[]=[];
  colors:Color[]=[];
  cars: Car[]=[];
  carImages:CarImage[]=[];
  currentImage:CarImage;
  
  dataloaded=false;
  filterCar="";

  

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private rentalService:RentalService,
    private colorService:ColorService,
    private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.carsDetail;
  }
  getCarsDetail(){
    this.carService.getCarsDetail().subscribe(
      Response=>{
  
       this.carsDetail=Response.data
       console.log(Response.data)
        this.dataloaded=true;
      }    
    )
  }
  
  getSliderClassName(carImage: CarImage) {
    if (this.currentImage === carImage) {
      return "carousel-item active"
    } else {
      return "carousel-item"
    }
  }

}
