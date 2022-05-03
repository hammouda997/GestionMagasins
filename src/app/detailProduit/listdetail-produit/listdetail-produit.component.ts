import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DetailProduit } from 'src/app/models/detail-produit';
import { DetailsProduitService } from 'src/app/services/details-produit.service';

@Component({
  selector: 'app-listdetail-produit',
  templateUrl: './listdetail-produit.component.html',
  styleUrls: ['./listdetail-produit.component.sass']
})
export class ListdetailProduitComponent implements OnInit {

  listdp: DetailProduit[];
  listInitiale: DetailProduit[];
  show:Boolean = false;
  myDetailProd: DetailProduit;
  constructor(private df:DetailsProduitService, private ac : Router) { }

  ngOnInit(): void {
    this.df.getAllDetailProduit().subscribe(res => {
      this.listdp = res;
      console.log(this.listdp,"aaaaaaaaaa");
      

    })
  }
  updateDetailProduit(i:number){
   this.ac.navigate(["/updateDetailProduit",i]);
   
  }
  deleteDetailProduit(j: number,i:number) {
    this.listdp.splice(i, 1);
    this.df.deleteDetailProduit(j).subscribe();
  }


}