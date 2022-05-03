import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DetailFacture } from '../models/detail-facture';
import { DetailFactureService } from '../services/detail-facture.service';

@Component({
  selector: 'app-list-detail-facture',
  templateUrl: './list-detail-facture.component.html',
  styleUrls: ['./list-detail-facture.component.sass']
})
export class ListDetailFactureComponent implements OnInit {
  list: DetailFacture[];
  listInitiale: DetailFacture[];
  show:Boolean = false;
  myDetailFact: DetailFacture;
  constructor(private df:DetailFactureService, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.df.getAllDetailFacture().subscribe(res => {
      this.list = res;
      

    })
  }
  updateDetailInvoice(i:DetailFacture){
    for (let k in this.list){
      if (this.list[k].idDetailFacture == i.idDetailFacture){
        this.list[k]=i;
      }
    }
  }
  deleteFacture(id: number,i:number) {
    this.list.splice(i, 1);
    this.df.deleteFacture(id).subscribe();
  }
  showEdit(i:DetailFacture){
    // this.show=!this.show;
    this.show=true;
     this.myDetailFact=i;
     //console.log(this.myInvoice);
   }

 
}
