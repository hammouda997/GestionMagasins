import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailProduit } from 'src/app/models/detail-produit';
import { Produit } from 'src/app/models/produit';
import { DetailsProduitService } from 'src/app/services/details-produit.service';
import { ProduitService } from 'src/app/services/produit.service';
import { categorieProduit } from '../categorie-produit.enum';

@Component({
  selector: 'app-edit-detail-produit',
  templateUrl: './edit-detail-produit.component.html',
  styleUrls: ['./edit-detail-produit.component.sass']
})
export class EditDetailProduitComponent implements OnInit {
  @Input() IdDetailProduit ;
  
getStyle(){return "italic";}
  listdp : DetailProduit [] ;
  DetailProduit : DetailProduit;  
  list : Produit [];
 
  public categorieProduit2 = categorieProduit;

  public categorieProduits = Object.keys(this.categorieProduit2);
  constructor(private ps:DetailsProduitService ,private xz: ProduitService , private routers : Router ,private ac : ActivatedRoute,public activeModal: NgbActiveModal) { }
  
  submitted = false; 
  ngOnInit(): void {
   
      this.getDetailProduitById();
      this.getAllProduit();
    }  
  save3() {  
    this.ps.UpdateDetailProduit(this.DetailProduit)  
      .subscribe(data => {
        console.log(data)    
        window.alert("Detail acec ID  "+ this.DetailProduit.idDetailProduit +"  est bien Modifier")
      },error => console.log(error)
      );  
    
    
  }  
  
  getDetailProduitById()
  {this.ps.getDetailProduitById(this.IdDetailProduit).subscribe(
    (res) => {
      console.log(res);
      this.DetailProduit = res;
    }
  );

  }
  getAllProduit() {
    this.xz.getAllProduit().subscribe(
      (res) => {
        console.log(res);
        this.list = res;
      }
    );
  }
}