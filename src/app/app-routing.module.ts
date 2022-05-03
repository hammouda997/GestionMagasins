import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { AddRayonComponent } from './add-rayon/add-rayon.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { ClientListComponent } from './client-list/client-list.component';
import { EditDetailProduitComponent } from './detailProduit/edit-detail-produit/edit-detail-produit.component';
import { ListdetailProduitComponent } from './detailProduit/listdetail-produit/listdetail-produit.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';
import { EditRayonComponent } from './edit-rayon/edit-rayon.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { AddFactureComponent } from './facture/add-facture/add-facture.component';
import { ListFactureComponent } from './facture/list-facture/list-facture.component';
import { FournisseurListComponent } from './fournisseur-list/fournisseur-list.component';
import { ListDetailFactureComponent } from './list-detail-facture/list-detail-facture.component';
import { ListStockComponent } from './list-stock/list-stock.component';
import { AddProduitComponent } from './Produit/add-produit/add-produit.component';
import { ListProduitComponent } from './Produit/list-produit/list-produit.component';
import { UpdateProduitComponent } from './Produit/update-produit/update-produit.component';
import { RayonComponent } from './list-rayon/rayon.component';
import { RegisterComponent } from './register/register.component';

import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: "facture", component: ListFactureComponent},
  {path:"addfacture",component:AddFactureComponent},
  
  { path: 'view-Fournisseur', component: FournisseurListComponent},  
  { path: 'add-Fournisseur', component: AddFournisseurComponent }, 
  { path: 'edit-Fournisseur', component: EditFournisseurComponent },
  {path: "ListProduit", component: ListProduitComponent},
  { path: 'add-client', component: AddClientComponent }, 
  { path: 'view-Client', component: ClientListComponent },
  { path: 'edit-Client', component: EditClientComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  {path:'Rayon',component:RayonComponent},
  
  {path:'AddRayon',component:AddRayonComponent},
  {path:'EditRayon/:idRayon',component:EditRayonComponent},
  {path:'listStock',component:ListStockComponent},
  {path:'AddStock',component:AddStockComponent},
  {path:'EditStock/:idStock',component:EditStockComponent},
  {path:"Produit",component:ListProduitComponent} ,
  {path:"DetailProduit", component:ListdetailProduitComponent},
20{path:"updateDetailProduit/:id",component:EditDetailProduitComponent},
{path:"addProduit",component:AddProduitComponent},
{path: "updateproduit/:id", component:UpdateProduitComponent},
{ path: "facture", component: ListFactureComponent },
{path:"addfacture",component:AddFactureComponent},
{ path: "detailfacture", component: ListDetailFactureComponent },



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }