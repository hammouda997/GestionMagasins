import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailFacture } from '../models/detail-facture';


@Injectable({
  providedIn: 'root'
})
export class DetailFactureService {
  listDF: DetailFacture[];
  httpOptions = { headers: new HttpHeaders({
    'Content-Type': 'application/json'})}
  constructor(private _http: HttpClient) { }

  getAllDetailFacture(): Observable<DetailFacture[]>{
    
    return this._http.get<DetailFacture[]>("http://localhost:8081/SpringMVC/servlet/getDetailFactures");

  }
  deleteFacture(detailfacture: DetailFacture | number):Observable<DetailFacture> {
    const id = typeof  detailfacture === 'number' ? detailfacture : detailfacture.idDetailFacture;
    const url="http://localhost:8081/SpringMVC/servlet/remove-dfacture"+'/'+id;
    return this._http.delete<DetailFacture>(url);
  }
  
  createF(detailfacture: DetailFacture): Observable<DetailFacture> {  
    return this._http.post<DetailFacture>('http://localhost:8081/SpringMVC/servlet/add-dfacture',detailfacture , this.httpOptions) ;
  }
  UpdateDetailFacture(detailfacture: DetailFacture): Observable<DetailFacture> {
   
    return this._http.put<DetailFacture>('http://localhost:8081/SpringMVC/servlet/modify-dfacture',detailfacture);
   }
getDetailFactureById(id: number): Observable <DetailFacture>{
  const url = "http://localhost:8081/SpringMVC/servlet/retrieve-dfacture/"+id; 
return this._http.get<DetailFacture>(url);
}
  }