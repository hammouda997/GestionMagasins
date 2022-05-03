import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rayon } from '../models/rayon';
import { RayonService } from '../services/rayon.service';

@Component({
  selector: 'app-add-rayon',
  templateUrl: './add-rayon.component.html',
  styleUrls: ['./add-rayon.component.sass']
})
export class AddRayonComponent implements OnInit {
  MyForm:FormGroup;
  @Output() notif= new EventEmitter<any>();
  constructor(private rs:RayonService,private router:Router) { }
  Rayon : Rayon=new Rayon();  
  submitted = false; 
  ngOnInit(): void {
    this.submitted=false;  
  }
  Rayonsaveform=new FormGroup({  
     
    libelleRayon:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]{4,}?")]),  
    codeRayon:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9]{4,}?")])  
  });  
  
  saveRayon(saveRayon){  
    this.Rayon=new Rayon();     
    this.Rayon.libelleRayon=this.Rayonlibelle.value;  
    this.Rayon.codeRayon=this.Rayoncode.value;  
    this.submitted = true;  
    this.save();  
  }  
  
  save() {  
    this.rs.addRayon(this.Rayon)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.Rayon = new Rayon();  
  }  
  
  get Rayonlibelle(){  
    return this.Rayonsaveform.get('libelleRayon');  
  }  
  
  get Rayoncode(){  
    return this.Rayonsaveform.get('codeRayon');  
  }  
  

  
  addRayonForm(){  
    this.submitted=false;  
    this.Rayonsaveform.reset();  
  }  
}
