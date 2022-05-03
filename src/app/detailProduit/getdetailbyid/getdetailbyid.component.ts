import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailProduit } from 'src/app/models/detail-produit';
import { DetailsProduitService } from 'src/app/services/details-produit.service';
import { categorieProduit } from '../categorie-produit.enum';
import { EditDetailProduitComponent } from '../edit-detail-produit/edit-detail-produit.component';

@Component({
  selector: 'app-getdetailbyid',
  templateUrl: './getdetailbyid.component.html',
  styleUrls: ['./getdetailbyid.component.sass']
})
export class GetdetailbyidComponent implements OnInit {
@Input() IdDetailProduit ;
  
getStyle(){return "italic";}

  list : DetailProduit [] ;
  DetailProduit : DetailProduit;  
    paramater : number ;
  public categorieProduit2 = categorieProduit;

  public categorieProduits = Object.keys(this.categorieProduit2);
  constructor(private ps:DetailsProduitService  ,public activeModal1: NgbActiveModal, private modalService: NgbModal ) { }
  
  submitted = false; 
  ngOnInit(): void {
        this.getDetailProduitById();
    }  
  
  
  getDetailProduitById()
  {this.ps.getDetailProduitById(this.IdDetailProduit).subscribe(
    (res) => {
      console.log(res);
      this.DetailProduit = res;
    }
  );

  }
  open(id: number) {
    const modalRef = this.modalService.open(EditDetailProduitComponent);
    modalRef.componentInstance.IdDetailProduit = id ;
}

}