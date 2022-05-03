import { Component, OnInit } from '@angular/core';
import { Facture } from '../../models/facture';
import { FactureService } from '../../services/facture.service';
import { ActivatedRoute } from '@angular/router';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.sass']
})
export class ListFactureComponent implements OnInit {
  list: Facture[];
  listInitiale: Facture[];
  show:Boolean = false;
  myFact: Facture;
  dateFacture: Date;
  montantFacture: number;
  
  constructor(private us:FactureService, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.us.getAllFacture().subscribe(res => {
      this.list = res;
      

    })
  }
  showEdit(i:Facture){
    // this.show=!this.show;
    this.show=true;
     this.myFact=i;
     //console.log(this.myInvoice);
   }

  deleteFacture(id: number,i:number) {
    this.list.splice(i, 1);
    this.us.deleteFacture(id).subscribe();
  }
  updateInvoice(i:Facture){
    for (let k in this.list){
      if (this.list[k].idFacture == i.idFacture){
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
  /*Search(){
    if(this.dateFacture == ""){
      this.ngOnInit();
    }
    else{
     
      this.list = this.list.filter(res =>{
        return res.dateFacture.toLocaleString().match(this.dateFacture.toLocaleString());
      })
    }
  }
  */
  Cancelfacture(id:any) {
    
    this.us.Cancelfacture(id).subscribe(
      (d)=>{
        let indexElement=this.list.findIndex((facture:any)=>{
          return facture.idFacture==id
        })
        console.log("list",this.list)

        console.log("index",indexElement)
        if(this.list[indexElement].active){
          this.list[indexElement].active=false

        }else{
          this.list[indexElement].active=true


        }
       // this.listfacture= d;
      },
      (err)=>{
        console.log("error",err)
      }
    )
  }
}
