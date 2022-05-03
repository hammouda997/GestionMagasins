import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  getStockList(): Observable<Stock[]> {  
    return this.http.get<Stock[]>("http://localhost:8081/SpringMVC/servlet/getAllStock");  
  }  
  deleteStock (ry: Stock | number): Observable<Stock> {
    const id = typeof ry === 'number' ? ry : ry.idStock;
    const url="http://localhost:8081/SpringMVC/servlet/remove-stock/"+id;
    return this.http.delete<Stock>(url);
    }
    updateStock(sto:Stock):Observable<Stock>{
      return this.http.put<Stock>("http://localhost:8081/SpringMVC/servlet/modify-stock",sto);

     }
    addStock (Stock: object): Observable<object> {  
      return this.http.post('http://localhost:8081/SpringMVC/servlet/add-Stock', Stock);  }
    
 
}

