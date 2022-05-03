import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Fournisseur } from '../models/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private baseUrl = 'http://localhost:8081/SpringMVC/servlet/';  
  constructor(private http:HttpClient) { }
  getFournisseurList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getFournisseur');  
  }  
  
  createFournisseur(Fournisseur: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'addFournisseur', Fournisseur);  
  }  
  
  deleteFournisseur(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}remove-fournisseur/${id}`, { responseType: 'text' });  
  }  
  
 
  updateFournisseur(four:Fournisseur):Observable<Fournisseur>{
    return this.http.put<Fournisseur>("http://localhost:8081/SpringMVC/servlet/modify-fournisseur",four);
  }
  getFournisseur(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}getFournisseur/${id}`);  
  }  
}
