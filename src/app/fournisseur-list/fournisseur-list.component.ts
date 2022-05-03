import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from "rxjs";  
  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { FournisseurService } from '../services/fournisseur.service';
import { Fournisseur } from '../models/fournisseur';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.sass']
})
export class FournisseurListComponent implements OnInit {
   
 constructor(private Fournisseurservice:FournisseurService) { }  
  
 FournisseurArray: any[] = [];  
 list:Fournisseur[];
 dtTrigger: Subject<any>= new Subject();  
 
 Fournisseurs: Observable<Fournisseur[]>;  
 Fournisseur : Fournisseur=new Fournisseur();  
 deleteMessage=false;  
 Fournisseurlist:any;  
 isupdated = false;   
 show:Boolean=false;
 myRay:Fournisseur;   
  
 
 ngOnInit() {  
   this.isupdated=false;  
        
   this.Fournisseurservice.getFournisseurList().subscribe(data =>{  
   this.Fournisseurs =data;  
   this.dtTrigger.next();  
   })  
 }  
   
 deleteF(id_fournisseur: number) {  
   this.Fournisseurservice.deleteFournisseur(id_fournisseur)  
     .subscribe(  
       data => {  
         console.log(data);  
         this.deleteMessage=true;  
         this.Fournisseurservice.getFournisseurList().subscribe(data =>{  
          this.Fournisseurs =data;  
           })  
       },  
       error => console.log(error));  
 }  

 
 Fournisseurupdateform=new FormGroup({  
  id_fournisseur:new FormControl(),  
  libelleFornisseur:new FormControl(),  
  codeFornisseur:new FormControl(),  
    
 });  
 
 get idFournisseur(){  
   return this.Fournisseurupdateform.get('idFournisseur');  
 }  
 
 get libelleFornisseur(){  
   return this.Fournisseurupdateform.get('libelleFornisseur');  
 }  
 
 get codeFornisseur(){  
   return this.Fournisseurupdateform.get('codeFornisseur');  
 }  
 

 
 changeisUpdate(){  
   this.isupdated=false;  
 }  

 showEdit(i:Fournisseur){
   this.show=true;
   this.myRay=i;
 }
updateFourisseur(i:Fournisseur){
for(let k in this.list){
  if(this.list[k].idFournisseur==i.idFournisseur){
    this.list[k]=i;
  }
}

}


}
