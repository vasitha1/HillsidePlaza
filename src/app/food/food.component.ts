import { Component, inject, input } from '@angular/core';
import { FoodService } from '../food.service';
import { food } from '../food';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  foodlist: food[] = []
  foodService: FoodService = inject (FoodService)

  constructor(){
    this.foodlist = this.foodService.getAllfoods();
  }
}
