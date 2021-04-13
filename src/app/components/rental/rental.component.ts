import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[]=[];
  dataLoaded=false;

  constructor(private rentalService:RentalService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute:ActivatedRoute,
    private customerService:CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(Response=>{
      this.rentals=Response.data
      this.dataLoaded=true;
    })
  }
  
 
}
