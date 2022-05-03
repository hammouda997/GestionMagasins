package tn.esprit.spring.DAO.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import tn.esprit.spring.DAO.entity.DetailFacture;


@Repository
public interface DetailFactureRepository extends CrudRepository<DetailFacture, Long> {

}
