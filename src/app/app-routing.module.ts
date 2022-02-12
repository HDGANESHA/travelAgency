import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationListComponent } from './destinations/destination-list/destination-list.component';
import { DestinationComponent } from './destinations/destination/destination.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [{path:'',component:LoginComponent},
{path:'destinationlist',component:DestinationListComponent},
{path:'destination',component:DestinationComponent},
{path:'destinations',component:DestinationsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
