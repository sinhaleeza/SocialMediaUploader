import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FacebookComponent } from './facebook/facebook.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'facebook/:id',
    component : FacebookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
