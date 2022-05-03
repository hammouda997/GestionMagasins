import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rayon } from '../models/rayon';
import { RayonService } from '../services/rayon.service';

@Component({
  selector: 'app-rayon',
  templateUrl: './rayon.component.html',
  styleUrls: ['./rayon.component.sass']
})
export class RayonComponent implements OnInit {

  rayons:Rayon[];
  MyRayons:Rayon;
  list: Rayon[];
  listInitiale: Rayon[];
  show:Boolean = false;
  myRay: Rayon;
  libelleRayon:string;
    constructor(private rs:RayonService, private ac:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.rs.getRayonList().subscribe((ry)=>this.rayons=ry);// nparcouri biha liste eli mawjouda fel bd
   
  
  
    
    }
  
    //i id de rayon ; j index de rayon dans la list angular 
    deleteRayon(i : number , j : number){
  this.rs.deleteRayon(i).subscribe();
  this.rayons.splice(j,1);
  
    }
    showEdit(i:Rayon){
      // this.show=!this.show;
      this.show=true;
       this.myRay=i;
       //console.log(this.myInvoice);
     }
     updaterayon(i:Rayon){
      for (let k in this.list){
        if (this.list[k].idRayon == i.idRayon){
          this.list[k]=i;
        }
      }
    }
  
    Search(){
      if(this.libelleRayon == ""){
        this.ngOnInit();
      }
      else{
       
        this.rayons = this.rayons.filter(res =>{
          return res.libelleRayon.toLocaleString().match(this.libelleRayon.toLocaleString());
        })
      }
      
    }
    triASC(){
      this.rs.TrierASD().subscribe((res)=> {
        this.rayons =res;
      });
    }
    triDESC(){
      this.rs.TrierDESC().subscribe((res)=> {
        this.rayons =res;
      });
    }
  
  }