import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Client } from '../models/client';
import { ClientService } from '../services/client.service';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.sass']
})
export class ClientListComponent implements OnInit {

   
 constructor(private ClientService:ClientService) { }  
  
 ClientArray: any[] = [];  
 list:Client[];
 dtTrigger: Subject<any>= new Subject();  
 
 Clients: Observable<Client[]>;  
 Client : Client=new Client();  
 deleteMessage=false;  
 Clientlist:any;  
 isupdated = false;   
 show:Boolean=false;
 myRay:Client;   
  
 
 ngOnInit() {  
   this.isupdated=false;  
        
   this.ClientService.getClientList().subscribe(data =>{  
   this.Clients =data;  
   this.dtTrigger.next();  
   })  
 }  
   
 deleteF(idClient: number) {  
   this.ClientService.deleteClient(idClient)  
     .subscribe(  
       data => {  
         console.log(data);  
         this.deleteMessage=true;  
         this.ClientService.getClientList().subscribe(data =>{  
          this.Clients =data;  
           })  
       },  
       error => console.log(error));  
 }  

 
 clientupdateform=new FormGroup({  
  idClient:new FormControl(),  
  nom:new FormControl(),  
  prenom:new FormControl(),
  email:new FormControl(),
  dateNaissance:new FormControl(),
  password:new FormControl(),
  catClient:new FormControl(),
  profession:new FormControl(),
    
 });  
 
 get idClient(){  
   return this.clientupdateform.get('idClient');  
 }  
 get nom(){  
  return this.clientupdateform.get('nom');  
} 
get prenom(){  
  return this.clientupdateform.get('prenom');  
} 
get email(){  
  return this.clientupdateform.get('email');  
} 
get dateNaissance(){  
  return this.clientupdateform.get('dateNaissance');  
} 
get password(){  
  return this.clientupdateform.get('password');  
}  
get catClient(){  
  return this.clientupdateform.get('catClient');  
}  
get profession(){  
  return this.clientupdateform.get('profession');  
}  
 

 
 changeisUpdate(){  
   this.isupdated=false;  
 }  

 showEdit(i:Client){
   this.show=true;
   this.myRay=i;
 }
updateClient(i:Client){
for(let k in this.list){
  if(this.list[k].idClient==i.idClient){
    this.list[k]=i;
  }
}

}

}
