import { Injectable } from '@angular/core';
import { Order } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderListShareService {

  listOfOrders: Order[] = [
    {
      orderNumber:"1",
      orderDueDate:"12/12/2020",
      customerBuyerName:"John",
      customerAddress:"f.no-12, Gandhi nagar, hyderabad-500050",
      customerPhone:"9100000000",
      orderTotal:200
    },
    {
      orderNumber:"2",
      orderDueDate:"12/01/2020",
      customerBuyerName:"Siddy",
      customerAddress:"f.no-12, Gandhi nagar, hyderabad-500050",
      customerPhone:"9200000000",
      orderTotal:300
    },
    {
      orderNumber:"3",
      orderDueDate:"01/06/2021",
      customerBuyerName:"John",
      customerAddress:"f.no-12, Gandhi nagar, hyderabad-500050",
      customerPhone:"9300000000",
      orderTotal:400
    }
  ];
  constructor() { }

}
