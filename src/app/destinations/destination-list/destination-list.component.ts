import { Component, OnInit } from '@angular/core';
import {DestinationService } from 'src/app/shared/destination.service'
@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.scss']
})
export class DestinationListComponent implements OnInit {
  page:number =1;
  filter:string;
  constructor(public destinationservice: DestinationService) { }

  ngOnInit(): void {
    console.log("Welcome to LifeCycle Hook");
    this.destinationservice.bindListDestinations();
  }
  deleteDestinations(Did: number) {
    if (confirm('Are u want to delete this record')) {
      this.destinationservice.deleteDestination(Did).subscribe(
        response => {
          this.destinationservice.bindListDestinations();

        }, error => {
          console.log(error);
        });


    }
  }
}
