import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private endpoint = "https://walmark-product-list-back.herokuapp.com/products/"
  constructor(private _http: HttpClient) { }

  getProducts(search:string):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this._http.get(this.endpoint + search, httpOptions);

  }
}
