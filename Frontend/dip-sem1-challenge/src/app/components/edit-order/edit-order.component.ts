import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IOrder, Order } from 'src/app/models/order';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css'],
})
export class EditOrderComponent implements OnInit {
  id: string;
  idString: string;
  subscription: Subscription;
  Order: Order[];
  newOrder: IOrder;
  @ViewChild('custid') custidInp: ElementRef;
  @ViewChild('prodid') prodid: ElementRef;
  @ViewChild('orderdate') orderdate: ElementRef;
  @ViewChild('qty') qty: ElementRef;
  @ViewChild('shipdate') shipdate: ElementRef;
  @ViewChild('shipmode') shipmode: ElementRef;

  constructor(private ApiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.subscription = this.ApiService.currentMessage.subscribe(
      (id) => (this.id = id)
    );
    // get id from params
    this.idString = this.router.url.split('/')[3];
    this.ApiService.viewOrder(this.idString).subscribe((res) => {
      this.Order = res;
    });
    console.log(this.Order);
  }
  updateOrder() {
    let CustID = this.custidInp.nativeElement.value;
    let ProdID = this.prodid.nativeElement.value;
    let OrderDate = this.orderdate.nativeElement.value;
    let Quantity = this.qty.nativeElement.value;
    let ShipDate = this.shipdate.nativeElement.value;
    let ShipMode = this.shipmode.nativeElement.value;

    this.newOrder = {
      _id: this.idString,
      CustID: CustID,
      ProdID: ProdID,
      OrderDate: OrderDate,
      Quantity: Quantity,
      ShipDate: ShipDate,
      ShipMode: ShipMode,
    };

    this.ApiService.editOrder(this.newOrder, this.idString).subscribe((res) => {
      this.router.navigate(['/order']);
    });
  }
}
