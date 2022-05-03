
import { Component, OnInit ,Output,EventEmitter, Input,SimpleChanges} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Fournisseur } from '../models/fournisseur';
import { FournisseurService } from '../services/fournisseur.service';
@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrls: ['./edit-fournisseur.component.sass']
})
export class EditFournisseurComponent implements OnInit {

  myForm : FormGroup;
  fournisseurs : Fournisseur[];
  FournisseurEdit : Fournisseur ; 
  @Input() prop2:Fournisseur;
  @Input() FournisseurToEdit:Fournisseur;

  @Output() editfournisseur = new EventEmitter<Fournisseur>();

  constructor(private rs:FournisseurService, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      idFournisseur:new FormControl({"value": this.FournisseurToEdit.idFournisseur, "disabled" : true} ),
      libelleFornisseur:new FormControl(this.FournisseurToEdit.libelleFornisseur),
      codeFornisseur:new FormControl(this.FournisseurToEdit.codeFornisseur)
      
    })
  }
  ngOnChanges(changes:SimpleChanges){
     /*this.FormProviderEdit=new FormGroup({
      codeFedit:new FormControl(this.ProviderToEdit.codeF),
      dateCreationedit:new FormControl(this.ProviderToEdit.dateCreation),
      categorieProduitedit:new FormControl(this.ProviderToEdit.categorieProduit)

     })*/
     console.log(changes);
     if(!changes.FournisseurToEdit.firstChange){
     this.myForm.setControl('idRayon',new FormControl(this.FournisseurToEdit.idFournisseur) );
     this.myForm.setControl('codeRayon',new FormControl(this.FournisseurToEdit.libelleFornisseur));
     this.myForm.setControl('libelleRayon',new FormControl(this.FournisseurToEdit.codeFornisseur)); 
   }
   }
   edit(){
    console.log(this.myForm.getRawValue());
    this.rs.updateFournisseur(this.myForm.getRawValue()).subscribe();
    this.editfournisseur.emit(this.myForm.getRawValue());
    this.myForm.reset();  
  }

}
