import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeRoutingModule } from './coffee-routing.module';



@NgModule({
  declarations: [
    CoffeeListComponent
  ],
  imports: [
    CommonModule,
    CoffeeRoutingModule
  ],
  providers: [
  ]
})
export class CoffeeModule { }
