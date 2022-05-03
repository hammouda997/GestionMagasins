import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailProduit } from '../models/detail-produit';

@Injectable({
  providedIn: 'root'
})
export class DetailsProduitService {

  list: DetailProduit[];
  private baseUrl = 'http://localhost:8081/SpringMVC/servlet/'; 
  httpOptions = { headers: new HttpHeaders({
    'Content-Type': 'application/json'})}
  constructor(private _http: HttpClient) { }

  getAllDetailProduit(): Observable<DetailProduit[]>{
    
    return this._http.get<DetailProduit[]>("http://localhost:8081/SpringMVC/servlet/getAllDetailProduit");

  }
  
  deleteDetailProduit(detailProduit: DetailProduit | number):Observable<DetailProduit> {
    const id = typeof  detailProduit === 'number' ? detailProduit : detailProduit.idDetailProduit;
    const url="http://localhost:8081/SpringMVC/servlet/remove-DetailProduit/"+'/'+id;
    return this._http.delete<DetailProduit>(url);
  }
  UpdateDetailProduit(detailProduit: DetailProduit): Observable<DetailProduit> {
   
    return this._http.put<DetailProduit>('http://localhost:8081/SpringMVC/servlet/update-DetailProduit',detailProduit , this.httpOptions);
   }

  createDP(detailProduit: object): Observable<object> {  
    return this._http.post(`${this.baseUrl}`+'add-DetailProduit', detailProduit);  
  } 
  getDetailProduitById(id: number): Observable<DetailProduit> {
    const url="http://localhost:8081/SpringMVC/servlet/retrieveDetailProduit"+'/'+id;
    return this._http.get<DetailProduit>(url);
  }
}