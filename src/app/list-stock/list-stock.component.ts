import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.sass']
})
export class ListStockComponent implements OnInit {
  stocks:Stock[];
  list: Stock[];
  show:Boolean = false;
  myRay: Stock;
    libelleStock: string;
    displaySpinner: boolean = true;
    constructor(private ps:StockService, private ac:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.ps.getStockList().subscribe((st)=>this.stocks=st
      );
      
    }
    deleteStock(i : number , j : number){
      this.ps.deleteStock(i).subscribe();
      this.stocks.splice(j,1);
      
        }
        showEdit(i:Stock){
          // this.show=!this.show;
          this.show=true;
           this.myRay=i;
           //console.log(this.myInvoice);
         }
         updatestock(i:Stock){
          for (let k in this.list){
            if (this.list[k].idStock == i.idStock){
              this.list[k]=i;
            }
          }
        }
        download(){
          var element = document.getElementById('table')
          html2canvas(element).then((canvas) => {
            console.log(canvas)
            var imgData = canvas.toDataURL('image/png')
            var doc = new jspdf()
            var imgHeight = canvas.height * 208 / canvas.width;
            doc.addImage(imgData, 0, 0, 208, imgHeight)
            doc.save("image.pdf")
          })
        }
        key:string='qte';
  reverse:boolean =false;
  sort(key){
    this.key= key;
    this.reverse = !this.reverse;
  }
  Search(){
    if(this.libelleStock == ""){
      this.ngOnInit();
    }
    else{
     
      this.stocks = this.stocks.filter(res =>{
        return res.libelleStock.toLocaleString().match(this.libelleStock.toLocaleString());
      })
    }
  }
  }
  