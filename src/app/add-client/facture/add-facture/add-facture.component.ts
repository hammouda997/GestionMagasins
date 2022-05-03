import { Component, OnInit } from '@angular/core';
import { Facture } from '../../models/facture';
import { FactureService } from '../../services/facture.service';

import { DetailFactureService } from 'src/app/services/detail-facture.service';
import { DetailFacture } from 'src/app/models/detail-facture';

@Component({
  selector: 'app-add-facture',
  templateUrl:  './add-facture.component.html',
  styleUrls: ['./add-facture.component.sass']
})
export class AddFactureComponent implements OnInit {
  detailfacture :DetailFacture = new DetailFacture();
  constructor(private ps: FactureService,  private df : DetailFactureService) { }
  
  submitted = false;
  ngOnInit(): void {
this.detailfacture.facture=new Facture();
  }
 
  saveFacture() {
    this.detailfacture;
    console.log("aaaaaaaaaaaa", this.detailfacture),
      this.df.createF(this.detailfacture)
    .subscribe(data => console.log(data), error => console.log(error));
}
  }
