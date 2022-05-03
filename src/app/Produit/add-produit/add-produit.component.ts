import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { categorieProduit } from 'src/app/detailProduit/categorie-produit.enum';
import { DetailProduit } from 'src/app/models/detail-produit';
import { Produit } from 'src/app/models/produit';
import { Rayon } from 'src/app/models/Rayon';
import { Stock } from 'src/app/models/Stock';
import { DetailsProduitService } from 'src/app/services/details-produit.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  today: number = Date.now() ; 
product : Produit = new Produit() ;  
list:Produit[];
listRayons : Rayon[];
listStock : Stock[];
listDet : DetailProduit[];
public categorieProduit2 = categorieProduit;
public categorieProduits = Object.keys(this.categorieProduit2);
constructor(private ps:ProduitService , private router: Router, private dp : DetailsProduitService , private modalService: NgbModal) { }

  ngOnInit(): void {

   this.product.detailproduit = new DetailProduit();
    this.getAllRayons();
    this.getAllStock();
    }
  
  saveProduit(){  
  
    this.product;
   
    console.log(this.product)  
    this.ps.addProduit(this.product).subscribe(
      data => {
        console.log(data)    
        this.router.navigate(['/Produit']);
      },error => console.log(error)
  
      );  
    

  }  
 
  getAllStock(){
    this.ps.getAllStocksFormDb().subscribe(
      data => {
        this.listStock = data ;
        console.log(this.listStock);
      }
    );
  }
  getAllRayons(){
    this.ps.getAllRayonsFormDb().subscribe(
      data => {
        this.listRayons = data ;
        console.log(this.listRayons);
      }
    );
  }
 
  }
  
  
  // open() {
    
  //   const modalRef = this.modalService.open(AddDetailProduitComponent);
  //   modalRef.componentInstance.name = 'World'
 
// }


