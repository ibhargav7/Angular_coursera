import { Component, OnInit } from '@angular/core';
import { Dishes } from '../shared/dishes';
import { Dish } from   '..//shared/dish'
import { DishService } from '../service/dish.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes!: Dish[];

  selectedDish!: Dish;

  constructor(private dishService: DishService) { }
  
  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
