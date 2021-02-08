import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Order } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommunicationComponentService {
  selectedOrder: Order;
  index: number;
  
  constructor() { }

  
}
