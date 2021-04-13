import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
  carImageForm:FormGroup;
  carsImage:CarImage[]=[];
  currentCarImage:CarImage[]=[];


  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private carImageService:CarImageService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getCarImage();
  }

  getCarImage(){
    this.carImageService.getCarImages().subscribe(response=>{
      this.carsImage = response.data
    })
     }
}

