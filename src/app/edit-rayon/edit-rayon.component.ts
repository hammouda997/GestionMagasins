import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Rayon } from '../models/rayon';
import { RayonService } from '../services/rayon.service';

@Component({
  selector: 'app-edit-rayon',
  templateUrl: './edit-rayon.component.html',
  styleUrls: ['./edit-rayon.component.sass']
})
export class EditRayonComponent implements OnInit {
  myForm : FormGroup;
  rayons : Rayon[];
  RayonEdit : Rayon ; 
  @Input() prop2:Rayon;
  @Input() rayonToEdit:Rayon;

  @Output() editRayon = new EventEmitter<Rayon>();

  constructor(private rs:RayonService, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      idRayon:new FormControl({"value": this.rayonToEdit.idRayon, "disabled" : true} ),
      codeRayon:new FormControl(this.rayonToEdit.codeRayon),
      libelleRayon:new FormControl(this.rayonToEdit.libelleRayon)
      
    })
  }
  ngOnChanges(changes:SimpleChanges){
     /*this.FormProviderEdit=new FormGroup({
      codeFedit:new FormControl(this.ProviderToEdit.codeF),
      dateCreationedit:new FormControl(this.ProviderToEdit.dateCreation),
      categorieProduitedit:new FormControl(this.ProviderToEdit.categorieProduit)

     })*/
     console.log(changes);
     if(!changes.rayonToEdit.firstChange){
     this.myForm.setControl('idRayon',new FormControl(this.rayonToEdit.idRayon) );
     this.myForm.setControl('codeRayon',new FormControl(this.rayonToEdit.codeRayon));
     this.myForm.setControl('libelleRayon',new FormControl(this.rayonToEdit.libelleRayon)); 
   }
   }
   edit(){
    console.log(this.myForm.getRawValue());
    this.rs.updateRayon(this.myForm.getRawValue()).subscribe();
    this.editRayon.emit(this.myForm.getRawValue());
    this.myForm.reset();  
  }



}
  


