import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private endpoint = "http://192.168.99.100:8080/products/"
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
