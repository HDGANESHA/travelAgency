import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DestinationService } from 'src/app/shared/destination.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
  destId : number;
 constructor(public destinationservice: DestinationService,private route:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnInit(): void {
    //get empId from ActivateRoute
    this.destId=this.route.snapshot.params["DestinationId"];
    console.log(this.destId);

    if(this.destId!=0 || this.destId!=null){
      console.log('hai');
     this.destinationservice.getDestination(this.destId).subscribe(
       result=>{
         
         console.log(result);


         this.destinationservice.formData=Object.assign({},result);
       },
       error=>{
         console.log(error);
       }
       
     )
    }
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    
    let addId =this.destinationservice.formData.DestinationId;
    if(addId==0||addId==null){
      //INSERT
     this.insertDestinationForm(form);
    }else{
     //update
     this.updateDestinationForm(form);
    }
  }
  insertDestinationForm(form?:NgForm){
    console.log("inserting a record...");
    this.destinationservice.insertDestination(form.value).subscribe(
      (result)=>{
      console.log(result);
      this.resetForm(form);
      this.toastrService.success('destination record has been inserted','TravelApp v2022');
      },
      (error)=>{
        console.log(error);
      }

    
      
    )
  }

  updateDestinationForm(form?:NgForm){
    console.log("updating a record...");
    this.destinationservice.updateDestination(form.value).subscribe(
      (result)=>{
      console.log(result);
      this.resetForm(form);
      this.toastrService.success(' Record has been updated','TravelApp v2022');

      },
      (error)=>{
        console.log(error);
      }

    
      
    )
  }

  //clearall content after submit
  resetForm(form?:NgForm){
    if(form!=null){
      form.resetForm();
    }
  }
}
