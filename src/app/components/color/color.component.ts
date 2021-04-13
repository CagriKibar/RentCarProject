import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  dataLoaded=false;
  filterText="";
  constructor(private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(Response=>{
      this.colors=Response.data
      this.dataLoaded=true;
    })
  }


  delete(color:Color){
   
   
      
       
    this.colorService.delete(color).subscribe(data=>{
      this.toastrService.success("Renk Silindi","Başarılı !")
      this.router.navigate(["colors"]).then(a=>window.location.reload())
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
