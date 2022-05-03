package tn.esprit.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import tn.esprit.spring.DAO.entity.Rayon;
import tn.esprit.spring.DAO.repository.RayonRepository;


@Service
public class RayonServiceImpl implements IRayonService  {
	
@Autowired
RayonRepository rayonrepo;

	@Override
	public List<Rayon> retrieveAllRayon() {
		List<Rayon> rayons =(List<Rayon> )rayonrepo.findAll();

		for (Rayon r: rayons){
			
			System.out.println("test");
		}
		return rayons;
	}

	@Override
	public Rayon addRayon(Rayon r) {
		return rayonrepo.save(r);
	}

	@Override
	public void deleteRayon(Long id) {
		rayonrepo.deleteById(id);		
	}

	@Override
	public Rayon updateRayon(Rayon r) {
		rayonrepo.save(r);
		return r;
	}

	@Override
	public Rayon retrieveRayon(Long id) {
		return rayonrepo.findById(id).get();
	}

}
