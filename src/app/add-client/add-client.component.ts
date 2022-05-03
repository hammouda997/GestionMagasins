import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../models/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.sass']
})
export class AddClientComponent implements OnInit {


  constructor(private ClientService:ClientService) { }
  Client : Client=new Client();  
  submitted = false; 
  ngOnInit(): void {
    this.submitted=false;  
  }
  Clientsaveform=new FormGroup({  
     
    nom:new FormControl('',[Validators.required]),  
    prenom:new FormControl(),
    email:new FormControl(),
    dateNaissance:new FormControl(),
    password:new FormControl(),
    catClient:new FormControl(),
    profession:new FormControl(),
    

  });  
  
  saveClient(saveClient){  
    this.Client=new Client();     
    this.Client.nom=this.nom.value;  
    this.Client.prenom=this.prenom.value;
    this.Client.email=this.email.value;
    this.Client.dateNaissance=this.dateNaissance.value;
    this.Client.password=this.password.value; 
    this.Client.catClient=this.catClient.value;
    this.Client.profession=this.profession.value;   
      
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.ClientService.createClient(this.Client)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.Client = new Client();  
  }  
  
  get nom(){  
    return this.Clientsaveform.get('nom');  
  } 
  get prenom(){  
    return this.Clientsaveform.get('prenom');  
  } 
  get email(){  
    return this.Clientsaveform.get('email');  
  } 
  get dateNaissance(){  
    return this.Clientsaveform.get('dateNaissance');  
  } 
  get password(){  
    return this.Clientsaveform.get('password');  
  }  
  get catClient(){  
    return this.Clientsaveform.get('catClient');  
  }  
  get profession(){  
    return this.Clientsaveform.get('profession');  
  }  
  
   
  
  
  
  addClientForm(){  
    this.submitted=false;  
    this.Clientsaveform.reset();  
  }  

}
