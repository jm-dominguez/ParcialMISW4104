import { Observable } from 'rxjs/internal/Observable';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListComponent } from './coffee-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoffeeService } from '../services/coffee.service';
import { of } from 'rxjs';

describe('CoffeeListComponent', () => {

  const mockCoffees:Array<any> = [
    {
      "id": 1,
      "nombre": "Café Especial para tí",
      "tipo": "Blend",
      "region": "Angelópolis, Antioquia",
      "sabor": "Panela, Durazno, Caramelo",
      "altura": 1920,
      "imagen": "imagen_1.png"},
    {
      "id": 2,
      "nombre": "Café sello rojo",
      "tipo": "Blend",
      "region": "Bogotá, Caldas",
      "sabor": "Café",
      "altura": 2000,
      "imagen": "imagen_2.png"},
    {
      "id": 3,
      "nombre": "Café Juan Valdez",
      "tipo": "Café de Origen",
      "region": "Amazonas",
      "sabor": "Pollo",
      "altura": 1340,
      "imagen": "imagen_3.png"}
  ]

  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let service: CoffeeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeeListComponent],
      providers: [
        CoffeeService
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CoffeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the headers correctly', () => {
    const observableMock = of(mockCoffees);
    spyOn(service, "getCoffees").and.returnValue(observableMock);
    fixture.detectChanges();
    expect(service.getCoffees).toHaveBeenCalled();
    const thList = fixture.nativeElement.querySelectorAll('th');
    expect(thList.length).toBe(4);
    expect(thList[0].textContent).toBe('#');
    expect(thList[1].textContent).toBe('Nombre');
    expect(thList[2].textContent).toBe('Tipo');
    expect(thList[3].textContent).toBe('Región');
  });

  it('should create the rows correctly', () => {
    const observableMock = of(mockCoffees);
    spyOn(service, "getCoffees").and.returnValue(observableMock);
    fixture.detectChanges();
    expect(service.getCoffees).toHaveBeenCalled();
    const trList = fixture.nativeElement.querySelectorAll('tr');
    expect(trList.length).toBe(4);
  });

  it('should create the tds correctly', () => {
    const observableMock = of(mockCoffees);
    spyOn(service, "getCoffees").and.returnValue(observableMock);
    fixture.detectChanges();
    expect(service.getCoffees).toHaveBeenCalled();
    const tdList = fixture.nativeElement.querySelectorAll('td');
    // Validar número de TDs
    expect(tdList.length).toBe(12);

    // Validar valores de TDs
    expect(Number(tdList[0].textContent)).toBe(mockCoffees[0].id);
    expect(tdList[1].textContent).toBe(mockCoffees[0].nombre);
    expect(tdList[2].textContent).toBe(mockCoffees[0].tipo);
    expect(tdList[3].textContent).toBe(mockCoffees[0].region);

    expect(Number(tdList[4].textContent)).toBe(mockCoffees[1].id);
    expect(tdList[5].textContent).toBe(mockCoffees[1].nombre);
    expect(tdList[6].textContent).toBe(mockCoffees[1].tipo);
    expect(tdList[7].textContent).toBe(mockCoffees[1].region);

    expect(Number(tdList[8].textContent)).toBe(mockCoffees[2].id);
    expect(tdList[9].textContent).toBe(mockCoffees[2].nombre);
    expect(tdList[10].textContent).toBe(mockCoffees[2].tipo);
    expect(tdList[11].textContent).toBe(mockCoffees[2].region);
  });
});
