import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CommunicationComponentService } from '../services/communication-component.service';
import { Order } from '../services/interfaces';
import { OrderListShareService } from '../services/order-list-share.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  editOrder = new FormGroup({
    orderNumber: new FormControl('', Validators.required),
    orderDueDate: new FormControl('', Validators.required),
    customerBuyerName: new FormControl('', Validators.required),
    customerAddress: new FormControl('', Validators.required),
    customerPhone: new FormControl('', Validators.required),
    orderTotal: new FormControl('', Validators.required),
  });
  selectedOrder: Order;
  constructor(
    private _ordersList: OrderListShareService,
    private messageService: MessageService,
    private communication: CommunicationComponentService) { 
    }

  ngOnInit(): void {
    this.editOrder.patchValue({
      orderNumber: this.communication.selectedOrder.orderNumber,
      orderDueDate: this.communication.selectedOrder.orderDueDate,
      customerBuyerName: this.communication.selectedOrder.customerBuyerName,
      customerAddress: this.communication.selectedOrder.customerAddress,
      customerPhone: this.communication.selectedOrder.customerPhone,
      orderTotal: this.communication.selectedOrder.orderTotal
    })
  }

  addOrder(){
    this._ordersList.listOfOrders.splice(this.communication.index, 1, this.editOrder.value);
    this.showSuccess();
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Product has been updated successfully.'});
  }

}
