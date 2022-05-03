import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GetdetailbyidComponent } from 'src/app/detailProduit/getdetailbyid/getdetailbyid.component';
import { Produit } from 'src/app/models/produit';
import { DetailsProduitService } from 'src/app/services/details-produit.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.sass']
})
export class ListProduitComponent implements OnInit {

  SearchVal: string = '';
  list: Produit[];
  produit: Produit = new Produit();
  constructor(private ps:ProduitService,private router : Router, private modalService: NgbModal ,private dp : DetailsProduitService) { }

  ngOnInit(): void {
    this.getAllProduit();
  }
  
  getAllProduit() {
    this.ps.getAllProduit().subscribe(
      (res) => {
        console.log(res);
        this.list = res;
      }
    );
  }
  deleteProduit(i: number) {
    this.ps.deleteProduit(i).subscribe((res) => {
      console.log(res);
      this.getAllProduit();
    });
  }
  UpdateProduit(id: number) {
    this.router.navigate(['/updateproduit',id]);
  }
  open(id: number) {
    const modalRef = this.modalService.open(GetdetailbyidComponent);
    modalRef.componentInstance.IdDetailProduit = id ;
 
}
deleteDetailProduit(j: number,i:number) {
  this.list.splice(i, 1);
  this.dp.deleteDetailProduit(j).subscribe();
}
Search() {
  if (this.SearchVal === '') {
    this.getAllProduit();
  } else {
    this.ps.rechercheProduitASC(this.SearchVal).subscribe((res) => {
      this.list = res;
    });
  }
}
triASC(){
  this.ps.TrierASD().subscribe((res)=> {
    this.list =res;
  });
}
triDESC(){
  this.ps.TrierDESC().subscribe((res)=> {
    this.list =res;
  });
}
}
