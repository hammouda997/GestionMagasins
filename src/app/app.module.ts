import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFactureComponent } from './facture/list-facture/list-facture.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditFactureComponent } from './edit-facture/edit-facture.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { FournisseurListComponent } from './fournisseur-list/fournisseur-list.component';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';
import { AddProduitComponent } from './Produit/add-produit/add-produit.component';
import { ListProduitComponent } from './Produit/list-produit/list-produit.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { AddRayonComponent } from './add-rayon/add-rayon.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditRayonComponent } from './edit-rayon/edit-rayon.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { ListStockComponent } from './list-stock/list-stock.component';
import { RayonComponent } from './list-rayon/rayon.component';
import { UpdateProduitComponent } from './Produit/update-produit/update-produit.component';



@NgModule({
  declarations: [
    AppComponent,
    ListFactureComponent,
    NavbarComponent,
    SidebarComponent,
    EditFactureComponent,
    AddFournisseurComponent,
    FournisseurListComponent,
    EditFournisseurComponent,
    AddProduitComponent,
    ListProduitComponent,
    AddClientComponent,
    ClientListComponent,
    EditClientComponent,
    SigninComponent,
    RegisterComponent,
    AddRayonComponent,
    AddStockComponent,
    EditRayonComponent,
    EditStockComponent,
    ListStockComponent,
    RayonComponent,
    UpdateProduitComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS , useClass : HttpInterceptorService ,multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
