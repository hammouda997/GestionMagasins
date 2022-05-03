import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.sass']
})
export class EditStockComponent implements OnInit {
  myForm : FormGroup;
  stocks : Stock[];
  StockEdit : Stock ; 
  @Input() prop2:Stock;
  @Input() stockToEdit:Stock;

  @Output() editStock= new EventEmitter<Stock>();
  constructor(private ac:ActivatedRoute,private es:StockService) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      idStock:new FormControl({"value": this.stockToEdit.idStock, "disabled" : true} ),
      qteStock:new FormControl(this.stockToEdit.qteStock),
      qteMin:new FormControl(this.stockToEdit.qteMin),
      libelleStock:new FormControl(this.stockToEdit.libelleStock)
      
    })
  }
  ngOnChanges(changes:SimpleChanges){
    /*this.FormProviderEdit=new FormGroup({
     codeFedit:new FormControl(this.ProviderToEdit.codeF),
     dateCreationedit:new FormControl(this.ProviderToEdit.dateCreation),
     categorieProduitedit:new FormControl(this.ProviderToEdit.categorieProduit)

    })*/
    console.log(changes);
    if(!changes.stockToEdit.firstChange){
    this.myForm.setControl('idStock',new FormControl(this.stockToEdit.idStock) );
    this.myForm.setControl('qteStock',new FormControl(this.stockToEdit.qteStock));
    this.myForm.setControl('qteMin',new FormControl(this.stockToEdit.qteMin)); 
    this.myForm.setControl('libelleStock',new FormControl(this.stockToEdit.libelleStock)); 
  }
  }
  edit(){
    console.log(this.myForm.getRawValue());
    this.es.updateStock(this.myForm.getRawValue()).subscribe();
    this.editStock.emit(this.myForm.getRawValue());
    this.myForm.reset();  
  }
}
