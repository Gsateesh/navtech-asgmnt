import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { OrderListShareService } from '../services/order-list-share.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  newOrder = new FormGroup({
    orderNumber: new FormControl('', Validators.required),
    orderDueDate: new FormControl('', Validators.required),
    customerBuyerName: new FormControl('', Validators.required),
    customerAddress: new FormControl('', Validators.required),
    customerPhone: new FormControl('', Validators.required),
    orderTotal: new FormControl('', Validators.required),
  });

  constructor(private _ordersList: OrderListShareService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  addOrder(){
    this._ordersList.listOfOrders.push(this.newOrder.value);
    this.showSuccess();
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Product added successfully.'});
  }
}
