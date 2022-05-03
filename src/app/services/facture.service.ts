import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from '../models/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  listFac: Facture[];
   
  private baseUrl = 'http://localhost:8081/SpringMVC/servlet/'; 
    
    constructor(private _http: HttpClient) { }
  
    
    getAllFacture(): Observable<Facture[]>{
      
      return this._http.get<Facture[]>("http://localhost:8081/SpringMVC/servlet/getFactures");
  
    }
    deleteFacture(facture: Facture | number): Observable<Facture> {
      const id = typeof  facture === 'number' ? facture : facture.idFacture;
      const url="http://localhost:8081/SpringMVC/servlet/remove-facture/"+'/'+id;
      return this._http.delete<Facture>(url);
    }
  
    getFactureById(id: number): Observable<Facture> {
      const url="    http://localhost:8081/SpringMVC/servlet/modify-facture"+'/'+id;
  
      return this._http.get<Facture>(url);
    }
    httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
      }
    addFacture(Facture: Facture): Observable<Facture> {
     
      return this._http.post<Facture>('http://localhost:8081/SpringMVC/servlet/add-facture',Facture, this.httpOptions);
    }
    
    UpdateFacture(Facture: Facture): Observable<Facture> {
     return this._http.put<Facture>('http://localhost:8081/SpringMVC/servlet/modify-facture',Facture);
    } 
  
  createF(Fournisseur: object): Observable<object> {  
    return this._http.post(`${this.baseUrl}`+'add-facture', Fournisseur);  
    } 
    Cancelfacture(id:any) {
      return this._http.put<Facture>('http://localhost:8081/SpringMVC/servlet/cancelfacture/'+id,id);
    }
  }
  
