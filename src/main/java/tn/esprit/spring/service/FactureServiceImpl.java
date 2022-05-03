package tn.esprit.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.DAO.entity.Facture;
import tn.esprit.spring.DAO.entity.Produit;
import tn.esprit.spring.DAO.repository.FactureRepository;

@Service
public class FactureServiceImpl implements IFactureService {
	@Autowired
	FactureRepository facturerepository;
	
	
	@Override
	public List<Facture> retrieveAllFacture() {
		List<Facture> factures =(List<Facture> )facturerepository.findAll();

		for (Facture f: factures){
			
			System.out.println("test");
		}
		return factures;
	}

	@Override
	public Facture addFacture(Facture f) {
		f.setActive(true);
		return facturerepository.save(f);
	}

	@Override
	public void deleteFacture(Long id) {
		facturerepository.deleteById(id);		
	}

	@Override
	public Facture updateFacture(Facture f) {
		facturerepository.save(f);
		return f;
	}

	@Override
	public Facture retrieveFacture(Long id) {
		 return facturerepository.findById(id).get();
	}

	@Override
	public void cancelFacture(Long id) {
		Facture facture = facturerepository.findById(id).get();
		facture.setActive(false);
		facturerepository.save(facture);
		
	}

}
