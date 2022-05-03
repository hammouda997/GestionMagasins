package tn.esprit.spring.service;

import java.util.List;

import tn.esprit.spring.DAO.entity.DetailProduit;


public interface IDetailProduitService {


	 List <DetailProduit> retrieveAllDetailProduit();
	 DetailProduit addDetailProduit(DetailProduit p);
	 void deleteDetailProduit(Long id);
	 DetailProduit updateDetailProduit(DetailProduit p);
	 DetailProduit retrieveDetailProduit(Long id);
	
	
	
	
}
