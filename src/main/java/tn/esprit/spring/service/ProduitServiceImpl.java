package tn.esprit.spring.service;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.DAO.entity.DetailProduit;
import tn.esprit.spring.DAO.entity.Produit;
import tn.esprit.spring.DAO.entity.Rayon;
import tn.esprit.spring.DAO.entity.Stock;
import tn.esprit.spring.DAO.repository.DetailProduitRepository;
import tn.esprit.spring.DAO.repository.ProduitRepository;
import tn.esprit.spring.DAO.repository.RayonRepository;
import tn.esprit.spring.DAO.repository.StockRepository;


@Service
public class ProduitServiceImpl implements IProduitService {
	
@Autowired
		ProduitRepository produitRepository;
@Autowired
		StockRepository stockRepository;
@Autowired
		RayonRepository rayonRepository;
@Autowired
		DetailProduitRepository detailrepository;


@Override
public List<Produit> retrieveAllProduit() {
	return (List<Produit> )produitRepository.findAll();
}

@Transactional
@Override
public Produit addProduit(Produit p, Long idRayon, Long idStock) {
	Stock stock=stockRepository.findById(idStock).orElse(null);// set men child lel parent
	Rayon rayon=rayonRepository.findById(idRayon).orElse(null) ;
	p.setRayon(rayon);
	p.setStock(stock);	
	detailrepository.save(p.getDetailproduit());
	return produitRepository.save(p);
}

@Override
public void deleteProduit(Long id ) {
	detailrepository.deleteById(id);		produitRepository.deleteById(id);
	
}

@Override
public Produit updateProduit(Produit p) {
	produitRepository.save(p);
	return p;

}

@Override
public Produit retrieveProduit(Long id) {
	Optional<Produit> p = produitRepository.findById(id) ;
	if ( p.isPresent())
	 return p.get(); // nzidha get pour renfonrcer l'objet dima ma findbyId nzid get
	else return null ;
}

	@Override
	@Transactional
	public DetailProduit saveDetailProduit(Produit p){
		if(p.getDetailproduit().getDatecreation()==null){
			p.getDetailproduit().setDatecreation(new Date ());
			p.getDetailproduit().setDateDernierModification(new Date());
			
		}else{
			p.getDetailproduit().setDateDernierModification(new Date());
		}
		
		DetailProduit dp = detailrepository.save(p.getDetailproduit());
		return dp ;
	}
	@Override

	public List<Produit> retrieveProduitsByName(String nom) {

		// TODO Auto-generated method stub

		return produitRepository.ProduitsByName(nom);

	}



	@Override

	public List<Produit> TrieProduitASC() {

		// TODO Auto-generated method stub

		return produitRepository.TrieProduitsASC();

	}



	@Override

	public List<Produit> TrieProduitDESC() {

		// TODO Auto-generated method stub

		return produitRepository.TrieProduitsDESC();

	}
}