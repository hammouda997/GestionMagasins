import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { Rayon } from 'src/app/models/Rayon';
import { Stock } from 'src/app/models/Stock';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
listProduit : Produit[];
  listRayon: Rayon[];
  listStock: Stock[];
  product:Produit ; 
  paramater : number ;
  constructor(private ps :ProduitService,private router :Router, private ac : ActivatedRoute) { }

  ngOnInit(): void {
   this.ac.params.subscribe(params=>
    {
      this.paramater=params['id'];
    })
    this.getAllRayons();
    this.getAllStocks();
    this.getProduitById();

  }
  getAllRayons() {
    this.ps.getAllRayonsFormDb().subscribe(
      (res) => {
        console.log(res);
        this.listRayon = res;
      }
    );
  }
  getAllStocks() {
    this.ps.getAllStocksFormDb().subscribe(
      (res) => {
        console.log(res);
        this.listStock = res;
      }
    );
  }
  getProduitById()
  {this.ps.getProduitById(this.paramater).subscribe(
    (res) => {
      console.log(res);
      this.product = res;
    }
  );

  }
  save2(){
    console.log(this.product);
    this.ps.UpdateProduit(this.product).subscribe(

      res=>{
        this.router.navigate(['/Produit']);
      }
    );
  }
}

