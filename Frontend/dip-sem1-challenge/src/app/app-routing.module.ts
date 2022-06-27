import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  { path: 'order', component: OrdersComponent },
  { path: 'order/edit/:id', component: EditOrderComponent },
  { path: 'order/create', component: CreateOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
