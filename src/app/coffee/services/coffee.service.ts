import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private baseUrl = "https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json";
  private http = inject(HttpClient);

  constructor() { }

  /**
   * Method to get a list of coffees from the url
   * @returns list of Coffees
   */
  getCoffees(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
