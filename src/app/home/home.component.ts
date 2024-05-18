import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FoodComponent } from '../food/food.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        HeaderComponent,
        FoodComponent
    ]
})
export class HomeComponent {

}
