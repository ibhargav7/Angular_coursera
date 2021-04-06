import { Component, OnInit } from '@angular/core';
import { Dishes } from '../shared/dishes';
import { Dish } from   '..//shared/dish'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes = Dishes;

  selectedDish !: Dish;
  constructor() { 
    
  }

  ngOnInit() {
    
  }
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
