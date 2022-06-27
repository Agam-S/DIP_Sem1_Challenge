import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { OrdersComponent } from './components/orders/orders.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';

@NgModule({
  declarations: [AppComponent, NavComponent, OrdersComponent, EditOrderComponent, CreateOrderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
