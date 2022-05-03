package tn.esprit.spring.service;

import java.util.List;

import tn.esprit.spring.DAO.entity.DetailProduit;
import tn.esprit.spring.DAO.entity.Produit;

public interface IProduitService {
	
	 List<Produit> retrieveAllProduit();
	 
     Produit addProduit(Produit p, Long idRayon, Long idStock);
	 void deleteProduit(Long id);
	 Produit updateProduit(Produit p);
	 Produit retrieveProduit(Long id);
		DetailProduit saveDetailProduit(Produit p);
		List<Produit> TrieProduitASC();
		List<Produit> TrieProduitDESC();
		List<Produit> retrieveProduitsByName(String name);

		

}
