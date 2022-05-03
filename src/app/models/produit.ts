import { DetailProduit } from "./detail-produit";
import { Fournisseur } from "./fournisseur";
import { Rayon } from "./rayon";
import { Stock } from "./stock";

export class Produit {
	idProduit : number;
    codeProduit: number;
    libelleProduit: string ;
    prixUnitaire: string ; 
    rayon : Rayon ;
    stock: Stock;
   detailproduit : DetailProduit ;
//   detailFactures : DetailFacture;
  fournissuers : Fournisseur;
}
