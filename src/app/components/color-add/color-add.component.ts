import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import {ColorService} from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {


  colorAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private colorService:ColorService,
    private router:Router) { }

  ngOnInit(): void {
    this.createColorAddForm();
    
  }
  
  createColorAddForm(){
    this.colorAddForm=this.formBuilder.group({
      colorName:["",Validators.required],

    })

  }

  add(){
    if(this.colorAddForm.valid){
     let colorModel=Object.assign({},this.colorAddForm.value)
     this.colorService.add(colorModel).subscribe(data=>{
       this.toastrService.success("Renk Eklendi","Başarılı !")
       console.log(data);
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
