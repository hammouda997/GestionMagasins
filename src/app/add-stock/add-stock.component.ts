import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.sass']
})
export class AddStockComponent implements OnInit {
  MyForm:FormGroup;
  @Output() notif= new EventEmitter<any>();
  constructor(private rs:StockService,private router:Router) { }
  Stock : Stock=new Stock() ;  
  submitted = false; 
  ngOnInit(): void {
    this.submitted=false;  
  }
  Stocksaveform=new FormGroup({  
     
    qteStock:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}?")]),  
    qtemin:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}?")]) ,
    libelleStock: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9]{1,}?")])
  });  

  saveStock(saveStock){  
    this.Stock=new Stock();     
    this.Stock.qteStock=this.GetQuantite.value;  
    this.Stock.qteMin=this.QteMin.value;  
    this.Stock.libelleStock=this.GetLibelle.value;  
    this.submitted = true;  
    this.save();  
  }  
  save() {  
    this.rs.addStock(this.Stock)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.Stock = new Stock();  
  }  
  get GetQuantite(){  
    return this.Stocksaveform.get('qteStock');  
  }  
  
  get GetLibelle(){  
    return this.Stocksaveform.get('libelleStock');  
  }  
  get QteMin(){  
    return this.Stocksaveform.get('qtemin');  
  }  
}
