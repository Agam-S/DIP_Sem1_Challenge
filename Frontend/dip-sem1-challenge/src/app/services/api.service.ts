import { Injectable } from '@angular/core';
import { IOrder, Order } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { ICustomer, IProducts } from '../models/customers';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private messageSource = new BehaviorSubject('default message');
  private listSource = new BehaviorSubject(null);

  currentMessage = this.messageSource.asObservable();
  sharedList = this.listSource.asObservable();

  private localLink = 'https://dip-challenge.azurewebsites.net/';
  constructor(private _http: HttpClient) {}

  getAllOrders(): Observable<IOrder[]> {
    const url = this.localLink + 'order';

    return this._http.get<IOrder[]>(url);
  }
  removeOrder(_id: string): Observable<IOrder> {
    const url = this.localLink + 'order/' + _id;
    return this._http.delete<IOrder>(url);
  }
  editOrder(newOrder: IOrder, _id: string): Observable<IOrder> {
    const url = this.localLink + 'order/' + _id;
    return this._http.put<IOrder>(url, newOrder);
  }
  changeMessage(id: string) {
    this.messageSource.next(id);
  }
  viewOrder(_id: string): Observable<Order[]> {
    const url = this.localLink + 'order/' + _id;
    console.log(url);
    return this._http.get<Order[]>(url);
  }
  createOrder(newOrder: IOrder, pro: string): Observable<Order> {
    const url = this.localLink + 'order/pro/' + pro;
    return this._http.post<Order>(url, newOrder);
  }
  getAllCustomers(): Observable<ICustomer[]> {
    const url = this.localLink + 'customer';
    return this._http.get<ICustomer[]>(url);
  }
  getAllProducts(): Observable<IProducts[]> {
    const url = this.localLink + 'product';
    return this._http.get<IProducts[]>(url);
  }
}
