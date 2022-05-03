import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../models/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.sass']
})
export class EditClientComponent implements OnInit {
  myForm : FormGroup;
  Clients : Client[];
  ClientEdit : Client ; 
  @Input() prop2:Client;
  @Input() ClientToEdit:Client;

  @Output() editClient = new EventEmitter<Client>();

  constructor(private rs:ClientService, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      idClient:new FormControl({"value": this.ClientToEdit.idClient, "disabled" : true} ),
      nom:new FormControl(this.ClientToEdit.nom),
      prenom:new FormControl(this.ClientToEdit.prenom),
      email:new FormControl(this.ClientToEdit.email),
      password:new FormControl(this.ClientToEdit.password),
      dateNaissance:new FormControl(this.ClientToEdit.dateNaissance),
      profession:new FormControl(this.ClientToEdit.profession),
      catClient:new FormControl(this.ClientToEdit.catClient),
      
    })
  }
  ngOnChanges(changes:SimpleChanges){
     /*this.FormProviderEdit=new FormGroup({
      codeFedit:new FormControl(this.ProviderToEdit.codeF),
      dateCreationedit:new FormControl(this.ProviderToEdit.dateCreation),
      categorieProduitedit:new FormControl(this.ProviderToEdit.categorieProduit)

     })*/
     console.log(changes);
     if(!changes.ClientToEdit.firstChange){
     this.myForm.setControl('idClient',new FormControl(this.ClientToEdit.idClient) );
     this.myForm.setControl('nom',new FormControl(this.ClientToEdit.nom));
     this.myForm.setControl('prenom',new FormControl(this.ClientToEdit.prenom)); 
     this.myForm.setControl('email',new FormControl(this.ClientToEdit.email)); 
     this.myForm.setControl('password',new FormControl(this.ClientToEdit.password)); 
     this.myForm.setControl('dateNaissance',new FormControl(this.ClientToEdit.dateNaissance)); 
     this.myForm.setControl('profession',new FormControl(this.ClientToEdit.profession)); 
     this.myForm.setControl('catClient',new FormControl(this.ClientToEdit.catClient)); 
   }
   }
   edit(){
    console.log(this.myForm.getRawValue());
    this.rs.updateClient(this.myForm.getRawValue()).subscribe();
    this.editClient.emit(this.myForm.getRawValue());
    this.myForm.reset();  
  }

}
