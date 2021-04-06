import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[];
  currentBrand:Brand;

  constructor(private brandService: BrandService,
    private toastrService:ToastrService,
    private router:Router ) { }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
      console.log("gelen marka",this.brands);
      
    })
  }
    setCurrentBrand(brand:Brand){
      console.log(brand.brandName)
      
    }
    getCurrentBrandClass(brand:Brand){
      if(brand==this.currentBrand){
        return "list-group-item active"
      }else{
        return "list-group-item"
      }
    }
    getAllBrandClass(){
      if(!this.currentBrand){
        return "list-group-item active"
      }else{
        return "list-group-item"
      }
    }

    delete(brand:Brand){
   
   
      
       
       this.brandService.delete(brand).subscribe(data=>{
         this.toastrService.success("Araç Silindi","Başarılı !")
         this.router.navigate(["cars"]).then(a=>window.location.reload())
       },responseError=>{
           if(responseError.error.Errors.length>0){
             console.log(responseError.error.Errors);
             for(let i=0; i<responseError.error.Errors; i++){
               this.toastrService.error(responseError.console.error[i].ErrorMessage,"Doğrulama Hatası");
             }
             
           }
           
          } )
          
           
      
    
      }
  


}
