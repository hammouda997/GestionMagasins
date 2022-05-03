import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Facture } from '../models/facture';

@Component({
  selector: 'app-edit-facture',
  templateUrl: './edit-facture.component.html',
  styleUrls: ['./edit-facture.component.sass']
})
export class EditFactureComponent implements OnInit {
  myForm : FormGroup;
  @Input() invoiceToEdit : Facture;
  @Input() prop2 : Facture;
  @Output() edited = new EventEmitter<Facture>();
  constructor() { }

  ngOnInit(): void {


    
    this.myForm=new FormGroup({
      idFacture:new FormControl({"value":this.invoiceToEdit.idFacture, "disabled":true}),
      dateFacture:new FormControl(this.invoiceToEdit.dateFacture, Validators.required),
      montantRemise: new FormControl(this.invoiceToEdit.montantRemise),
      active:new FormControl(this.invoiceToEdit.active),
      montantFacture:new FormControl(this.invoiceToEdit.montantFacture)
    })
    
  }
  ngOnChanges(changes:SimpleChanges){
    /* this.myForm=new FormGroup({
       idInvoice:new FormControl(this.invoiceToEdit.idInvoice),
       dateBill:new FormControl(this.invoiceToEdit.dateBill),
       discountAmount: new FormControl(this.invoiceToEdit.discountAmount),
       Status:new FormControl(this.invoiceToEdit.Status),
       billAmount:new FormControl(this.invoiceToEdit.billAmount)
     })*/
     console.log(changes);
     if(!changes.invoiceToEdit.firstChange){
     this.myForm.setControl('idFacture',new FormControl(this.invoiceToEdit.idFacture));
     this.myForm.setControl('dateFacture',new FormControl(this.invoiceToEdit.dateFacture));
     this.myForm.setControl('montantRemise',new FormControl(this.invoiceToEdit.montantRemise));
     this.myForm.setControl('montantFacture',new FormControl(this.invoiceToEdit.montantFacture));
     this.myForm.setControl('active',new FormControl(this.invoiceToEdit.active));
   }
   }



  edit(){
    console.log(this.myForm.getRawValue());
    this.edited.emit(this.myForm.getRawValue());
    this.myForm.reset();
  }
}
