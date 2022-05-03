package tn.esprit.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import tn.esprit.spring.DAO.entity.Fournisseur;
import tn.esprit.spring.DAO.entity.Produit;
import tn.esprit.spring.DAO.repository.FournisseurRepository;

@Service
public class FournisseurServiceImpl implements IFournisseurService {

	@Autowired
	FournisseurRepository fournisseurrepository;

	@Override
	public List<Fournisseur> retrieveAllFournisseur() {
		List<Fournisseur> four =(List<Fournisseur> )fournisseurrepository.findAll();

		for (Fournisseur f: four){
			
			System.out.println("test");
		}
		return four;
	}
	@Override
	public Fournisseur addFournisseur(Fournisseur f) {
		return fournisseurrepository.save(f);
	}

	@Override
	public void deleteFournisseur(Long id) {
		fournisseurrepository.deleteById(id);
		
	}

	@Override
	public Fournisseur updateFournisseur(Fournisseur f) {
		fournisseurrepository.save(f);
		return f;
	}

	@Override
	public Fournisseur retrieveFournisseur(Long id) {
	 return 	fournisseurrepository.findById(id).get();
		
	}
	


}
