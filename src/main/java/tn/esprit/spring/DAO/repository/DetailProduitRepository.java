package tn.esprit.spring.DAO.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import tn.esprit.spring.DAO.entity.DetailProduit;
@Repository
public interface DetailProduitRepository  extends CrudRepository<DetailProduit, Long> {

}
