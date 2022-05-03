import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fournisseur } from '../models/fournisseur';
import { FournisseurService } from '../services/fournisseur.service';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.sass']
})
export class AddFournisseurComponent implements OnInit {
  

  constructor(private FournisseurService:FournisseurService) { }
  Fournisseur : Fournisseur=new Fournisseur();  
  submitted = false; 
  ngOnInit(): void {
    this.submitted=false;  
  }
  Fournisseursaveform=new FormGroup({  
     
    libelle_Fournisseur:new FormControl('',[Validators.required,Validators.minLength(4)]),  
    code_Fournisseur:new FormControl()  
  });  
  
  saveFournisseur(saveFournisseur){  
    this.Fournisseur=new Fournisseur();     
    this.Fournisseur.libelleFornisseur=this.Fournisseurlibelle.value;  
    this.Fournisseur.codeFornisseur=this.Fournisseurcode.value;  
      
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.FournisseurService.createFournisseur(this.Fournisseur)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.Fournisseur = new Fournisseur();  
  }  
  
  get Fournisseurlibelle(){  
    return this.Fournisseursaveform.get('libelle_Fournisseur');  
  }  
  
  get Fournisseurcode(){  
    return this.Fournisseursaveform.get('code_Fournisseur');  
  }  
  
  
  
  addFournisseurtForm(){  
    this.submitted=false;  
    this.Fournisseursaveform.reset();  
  }  
}
