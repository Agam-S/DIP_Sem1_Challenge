import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { IOrder } from 'src/app/models/order';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(private ApiService: ApiService, private router: Router) {}
  orders: IOrder[];
  subscription: Subscription;
  idString: string;
  id: string;
  ngOnInit() {
    this.orders = [];
    this.ApiService.getAllOrders().subscribe((list) => {
      for (let i = 0; i < list.length; i++) {
        this.orders.push(list[i]);
      }
    });
  }

  editOrder(_id: string) {
    this.idString = _id;
    this.ApiService.changeMessage(this.idString);
    this.router.navigate(['/order/edit/' + _id]);
    console.log(_id);
  }
  removeOrder(_id: string) {
    if (confirm('Are you sure you want to delete this order?')) {
      this.ApiService.removeOrder(_id).subscribe((res: any) => {
        alert('Order Deleted!');
        let cUrl = this.router.url;
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate([cUrl]);
          });
        console.log(_id);
      });
    }
  }
}
