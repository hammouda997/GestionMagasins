package tn.esprit.spring.service;

import java.util.List;

import tn.esprit.spring.DAO.entity.Facture;


public interface IFactureService {

	
	 List<Facture> retrieveAllFacture();
	 Facture addFacture(Facture f);
	 void deleteFacture(Long id);
	 void cancelFacture(Long id);
	 Facture updateFacture(Facture f);
	 Facture retrieveFacture(Long id);
}
