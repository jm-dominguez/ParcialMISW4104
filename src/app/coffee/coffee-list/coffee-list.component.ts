import { Component, inject, OnInit } from '@angular/core';
import { CoffeeService } from '../services/coffee.service';
import { Coffee } from '../models/coffee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css',
  standalone: false
})
export class CoffeeListComponent implements OnInit {

  coffeeService: CoffeeService = inject(CoffeeService);
  coffeeList: Array<Coffee>;

  constructor() {
    this.coffeeList = [];
  }

  ngOnInit(): void {
    this.coffeeService.getCoffees().subscribe((response:Array<any>) => {
      let coffeeArray:Array<Coffee> = []
      for (const element of response) {
        const coffee = new Coffee(element.id, element.nombre, element.tipo, element.region, element.sabor, element.altura, element.imagen);
        coffeeArray.push(coffee);
      }
      this.coffeeList = coffeeArray;
    })
  }
}
