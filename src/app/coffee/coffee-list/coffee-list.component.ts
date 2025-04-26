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

  static readonly blend = 'Blend';
  static readonly origin = 'Café de Origen';

  coffeeService: CoffeeService = inject(CoffeeService);
  coffeeList: Array<Coffee>;
  numberOfBlend: number;
  numberOfOrigin: number;

  constructor() {
    this.coffeeList = [];
    this.numberOfBlend = 0;
    this.numberOfOrigin = 0;
  }

  ngOnInit(): void {
    this.coffeeService.getCoffees().subscribe((response:Array<any>) => {
      let coffeeArray:Array<Coffee> = []
      let numberOfBlend = 0;
      let numberOfOrigin = 0;
      for (const element of response) {
        const coffee = new Coffee(element.id, element.nombre, element.tipo, element.region, element.sabor, element.altura, element.imagen);
        if (coffee.tipo === CoffeeListComponent.blend) {
          numberOfBlend ++;
        } else if (coffee.tipo === CoffeeListComponent.origin) {
          numberOfOrigin ++;
        }
        coffeeArray.push(coffee);
      }
      this.coffeeList = coffeeArray;
      this.numberOfBlend = numberOfBlend;
      this.numberOfOrigin = numberOfOrigin;
    })
  }
}
