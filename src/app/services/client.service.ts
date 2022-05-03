import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8081/SpringMVC/servlet/';  
  constructor(private http:HttpClient) { }
  getClientList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllClient');  
  }  
  
  createClient(Client: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'add-client', Client);  
  }  
  
  deleteClient(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}remove-client/${id}`, { responseType: 'text' });  
  }  
  
 
  updateClient(four:Client):Observable<Client>{
    return this.http.put<Client>("http://localhost:8081/SpringMVC/servlet/modify-client",four);
  }
  getClient(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}getClient/${id}`);  
  }  
}
