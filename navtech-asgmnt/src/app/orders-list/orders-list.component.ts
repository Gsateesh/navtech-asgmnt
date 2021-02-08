import { Component, OnInit } from '@angular/core';
import { Order } from '../services/interfaces';
import { ConfirmationService, MessageService, PrimeNGConfig } from "primeng/api";
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DialogService} from 'primeng/dynamicdialog';
import { AddOrderComponent } from '../add-order/add-order.component';
import { OrderListShareService } from '../services/order-list-share.service';
import { EditOrderComponent } from '../edit-order/edit-order.component';
import { CommunicationComponentService } from '../services/communication-component.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
  providers: [DialogService, MessageService]
})
export class OrdersListComponent implements OnInit {
  ref: DynamicDialogRef;
  orders: Order[] = [];
  selectedOrder: Order;
  constructor(
    public dialogService: DialogService,
    private primengConfig: PrimeNGConfig,
    private _ordersList: OrderListShareService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private communication: CommunicationComponentService ) {

      this.orders = this._ordersList.listOfOrders;
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  deleteOrder(event: Event, index: number){
    this.confirmationService.confirm({
      target: event.target,
      message: "Are you sure that you want to proceed?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.orders.splice(index,1);
        this.messageService.add({
          severity: "success",
          summary: "Done",
          detail: "Order has been deleted."
        });
      }
    });
  }


  addProductDialog(){
    this.ref = this.dialogService.open( AddOrderComponent, {
        header: 'Please enter new order details.',
        width: '500px',
        contentStyle: {"max-height": "1000%", "overflow": "auto"},
        baseZIndex: 10000
    });
    this.ref.onClose.subscribe(() =>{
    });
  }

  editOrder(order:Order, index: number){
    // this.communication.selectedOrder.next({});
    // this.communication.selectedOrder.next(order);
    this.communication.index = index;
    this.communication.selectedOrder = order;
    this.ref = this.dialogService.open( EditOrderComponent, {
        header: 'Please save the details.',
        width: '500px',
        contentStyle: {"max-height": "1000%", "overflow": "auto"},
        baseZIndex: 10000
    });
    this.ref.onClose.subscribe(() =>{
    });
  }
}
