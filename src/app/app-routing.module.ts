import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersPageComponent } from './orders/pages/orders-page/orders-page.component';

const routes: Routes = [{
  path: '',
  component: OrdersPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
