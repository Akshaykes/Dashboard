import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { ProductsComponent } from './products/products.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {
    path: '',component:MaincontentComponent
  },
  {
    path: 'products',component:ProductsComponent
  },
  {
    path: 'review',component:ReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
