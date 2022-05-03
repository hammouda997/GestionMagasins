package tn.esprit.spring.service;

import java.util.List;

import tn.esprit.spring.DAO.entity.Fournisseur;


public interface IFournisseurService {
	 List<Fournisseur> retrieveAllFournisseur();
	 Fournisseur addFournisseur(Fournisseur f);
	 void deleteFournisseur(Long id);
	 Fournisseur updateFournisseur(Fournisseur f);
	 Fournisseur retrieveFournisseur(Long id);
}
