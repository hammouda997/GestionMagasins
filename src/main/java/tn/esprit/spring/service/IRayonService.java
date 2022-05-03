package tn.esprit.spring.service;

import java.util.List;


import tn.esprit.spring.DAO.entity.Rayon;

public interface IRayonService {
	
	 List<Rayon> retrieveAllRayon();
	 Rayon addRayon(Rayon r);
	 void deleteRayon(Long id);
	 Rayon updateRayon(Rayon r);
	 Rayon retrieveRayon(Long id);
}
