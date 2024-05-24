import { Injectable } from '@angular/core';
import { food } from './food';
import { foodlist } from './mockfood';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foodlist= foodlist
  constructor() { }

  getAllfoods() : food[] {
     return this.foodlist;
  }
}
