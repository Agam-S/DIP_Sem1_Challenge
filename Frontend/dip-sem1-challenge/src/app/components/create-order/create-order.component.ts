import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from 'src/app/models/order';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  newOrder: IOrder;
  @ViewChild('custid') custidInp: ElementRef;
  @ViewChild('prodid') prodid: ElementRef;
  @ViewChild('orderdate') orderdate: ElementRef;
  @ViewChild('qty') qty: ElementRef;
  @ViewChild('shipdate') shipdate: ElementRef;
  @ViewChild('shipmode') shipmode: ElementRef;
  custs: any;
  custid: any;
  prods: any;
  prodidd: any;
  constructor(private ApiService: ApiService, private router: Router) {}

  ngOnInit() {
    // get all customers
    this.ApiService.getAllCustomers().subscribe((res) => {
      this.custs = res;
    });
    // get all products
    this.ApiService.getAllProducts().subscribe((res) => {
      this.prods = res;
    });
  }
  createOrder() {
    let CustID = this.custid;
    let ProdID = this.prodidd;
    let OrderDate = this.orderdate.nativeElement.value;
    let Quantity = this.qty.nativeElement.value;
    let ShipDate = this.shipdate.nativeElement.value;
    let ShipMode = this.shipmode.nativeElement.value;

    this.newOrder = {
      CustID: CustID,
      ProdID: ProdID,
      OrderDate: OrderDate,
      Quantity: Quantity,
      ShipDate: ShipDate,
      ShipMode: ShipMode,
    };

    this.ApiService.createOrder(this.newOrder, ProdID).subscribe((res) => {
      this.router.navigate(['/order']);
    });
  }
  onChange(deviceValue: any) {
    this.custid = deviceValue.target.value;
    console.log(this.custid);
  }
  onChangee(deviceValue: any) {
    this.prodidd = deviceValue.target.value;
    console.log(this.prodidd);
  }
}
