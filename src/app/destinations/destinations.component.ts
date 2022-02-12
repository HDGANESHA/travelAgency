import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../shared/destination.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  page:number =1;
  filter:string;
  constructor(public destinationservice: DestinationService) { }

  ngOnInit(): void {
    console.log("Welcome to LifeCycle Hook");
    this.destinationservice.bindListCarDestinations();

  }

}
