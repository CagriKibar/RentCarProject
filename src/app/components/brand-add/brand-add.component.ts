import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  

  brands:Brand[]=[];
  dataLoaded=false;
  brandAddForm:FormGroup;
  constructor(private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private brandService:BrandService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createBrandAddForm();

    
  }


 
 createBrandAddForm(){
   this.brandAddForm=this.formBuilder.group({
     brandName:["",Validators.required],

   })
 }

 add(){
   
   
  if(this.brandAddForm.valid){
   let brandModel=Object.assign({},this.brandAddForm.value)
   this.brandService.add(brandModel).subscribe(data=>{
     this.toastrService.success("Araç Eklendi","Başarılı !")
     this.router.navigate(["cars"])
   },responseError=>{
       if(responseError.error.Errors.length>0){
         console.log(responseError.error.Errors);
         for(let i=0; i<responseError.error.Errors; i++){
           this.toastrService.error(responseError.console.error[i].ErrorMessage,"Doğrulama Hatası");
         }
         
       }
       
      } )
      
       
   }else{
     this.toastrService.error("Formunuz Eksik" ," Dikkat")
   }

  }


  
}
