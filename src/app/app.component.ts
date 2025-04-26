import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoffeeListComponent } from "./coffee/coffee-list/coffee-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoffeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ParcialMISW-4104';
}
