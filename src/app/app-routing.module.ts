import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [{
  path: 'home', 
  component: HomeComponent
}, 
 {
  path: 'cart', 
  component: CartComponent
 },
 {
  path: 'landing', 
  component: LandingComponent
 },
{
  path: '', redirectTo: 'landing', pathMatch: 'full'
}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
