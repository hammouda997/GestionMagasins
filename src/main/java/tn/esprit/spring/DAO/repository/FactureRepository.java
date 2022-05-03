package tn.esprit.spring.DAO.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import tn.esprit.spring.DAO.entity.Facture;
@Repository
public interface FactureRepository extends CrudRepository<Facture, Long> {

}
