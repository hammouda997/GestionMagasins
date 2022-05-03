package tn.esprit.spring.service;

import java.util.List;

import tn.esprit.spring.DAO.entity.DetailFacture;

public interface IDetailFactureService  {
	
	 List<DetailFacture> retrieveAllDetailFacture();
	 DetailFacture addDetailFacture(DetailFacture d);
	 void deleteDetailFacture(Long id);
	 DetailFacture updateDetailFacture(DetailFacture d);
	 DetailFacture retrieveDetailFacture(Long id);

}
