import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path:"cards",pathMatch:"full",component:CardsComponent},
  {path:"cart",pathMatch:"full",component:CartComponent},
  {path:"details",pathMatch:"full",component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
