import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destination } from './destination';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Busdestination } from './busdestination'
@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  destination: Destination[];
  busdestination:Busdestination[];
 
  formData: Destination = new Destination();
  constructor(private httpClient: HttpClient) { }

  bindListDestinations() {

    this.httpClient.get(environment.apiUrl + '/api/destinations/getalldestinations')

      .toPromise().then(

        response => {

          console.log("from service");

          console.log(response);

          this.destination = response as Destination[];


        }

      );

  }

  bindListCarDestinations() {

    this.httpClient.get(environment.apiUrl + '/api/plans/getallplans')

      .toPromise().then(

        response => {

          console.log("from service");

          console.log(response);

          this.busdestination = response as Busdestination[];


        }

      );

  }

  deleteDestination(id: number) {
    return this.httpClient.delete(environment.apiUrl + "/api/destinations/" + id);
  }


  getDestination(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/destinations/" + id);
  }

  insertDestination(destination: Destination): Observable<any> {
    console.log(destination);
    return this.httpClient.post(environment.apiUrl + "/api/destinations", destination);
  }
  updateDestination(destination: Destination): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/destinations", destination);
  }
}
