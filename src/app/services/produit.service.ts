import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';
import { Rayon } from '../models/Rayon';
import { Stock } from '../models/Stock';

// import { rayon } from '../models/rayon';
// import { stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  createDP(detailproduit: any) {
    throw new Error('Method not implemented.');
  }

  list: Produit[];
  // listRayon: rayon[];

  // listStock: stock[];

   
  private baseUrl = 'http://localhost:8081/SpringMVC/servlet/'; 
    
    constructor(private _http: HttpClient) { }
  
    
    getAllProduit(): Observable<Produit[]>{
      
      return this._http.get<Produit[]>("http://localhost:8081/SpringMVC/servlet/getAllProduit");
  
    }
    deleteProduit(produit: Produit | number): Observable<Produit> {
      const id = typeof produit === 'number' ? produit : produit.idProduit;
      const url="http://localhost:8081/SpringMVC/servlet/delete-produit"+'/'+id;
      return this._http.delete<Produit>(url);
    }
  
    getProduitById(id: number): Observable<Produit> {
      const url="http://localhost:8081/SpringMVC/servlet/retrieveProduit"+'/'+id;
  
      return this._http.get<Produit>(url);
    }
    httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
      }
    addProduit(product: Produit): Observable<Produit> {
     
      return this._http.post<Produit>('http://localhost:8081/SpringMVC/servlet/add-produit',product, this.httpOptions);
    }
    
    UpdateProduit(product: Produit): Observable<Produit> {
     return this._http.put<Produit>('http://localhost:8081/SpringMVC/servlet/update-produit',product, this.httpOptions);
    } 
  

   getAllRayonsFormDb(): Observable<Rayon[]> {
     return this._http.get<Rayon[]>(
       'http://localhost:8081/SpringMVC/servlet/getRayons'
    );
  }
   getAllStocksFormDb(): Observable<Stock[]> {
     return this._http.get<Stock[]>(
       'http://localhost:8081/SpringMVC/servlet/getAllStock'
     );
   }
   // http://localhost:8081/SpringMVC/servlet/retrieve-produitASC
	 rechercheProduitASC(libelle : string):Observable<Produit[]> {
		return this._http.get<Produit[]>('http://localhost:8081/SpringMVC/servlet/retrieve-produitByLibelle/'+ libelle);

	}

  // http://localhost:8081/SpringMVC/servlet/retrieve-produitASC
  TrierASD():Observable<Produit[]>{
    return this._http.get<Produit[]>("http://localhost:8081/SpringMVC/servlet/retrieve-produitASC");
  }

// http://localhost:8081/SpringMVC/servlet/retrieve-produitDESC
TrierDESC():Observable<Produit[]>{
  return this._http.get<Produit[]>("http://localhost:8081/SpringMVC/servlet/retrieve-produitDESC");
}
}