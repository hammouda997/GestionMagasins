package tn.esprit.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.DAO.entity.DetailFacture;
import tn.esprit.spring.DAO.entity.Produit;
import tn.esprit.spring.DAO.repository.DetailFactureRepository;

@Service
public class DetailFactureService implements IDetailFactureService {
	@Autowired
	DetailFactureRepository detailfacture;
	
	
	
	@Override
	public List<DetailFacture> retrieveAllDetailFacture() {
		
		List<DetailFacture> details =(List<DetailFacture> )detailfacture.findAll();

		for (DetailFacture d: details){
			
			System.out.println("test");
		}
		return details;
	}

	@Override
	public DetailFacture addDetailFacture(DetailFacture d) {
		return detailfacture.save(d);
	}

	@Override
	public void deleteDetailFacture(Long id) {
		detailfacture.deleteById(id);
		
	}

	@Override
	public DetailFacture updateDetailFacture(DetailFacture d) {
		detailfacture.save(d);
		return d;
	}

	@Override
	public DetailFacture retrieveDetailFacture(Long id) {
		 return detailfacture.findById(id).get();
	}

}
