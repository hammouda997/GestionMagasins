package tn.esprit.spring.controllor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.DAO.entity.DetailProduit;
import tn.esprit.spring.DAO.entity.Produit;
import tn.esprit.spring.service.IDetailProduitService;
import tn.esprit.spring.service.IProduitService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProduitRestController {
	@Autowired
	IProduitService produitService;
	//http://localhost:8090/SpringMVC/servlet/getAllProduit
	@GetMapping("getAllProduit")
	public List<Produit> retrieveAllProduit() {
		return produitService.retrieveAllProduit();
	
	}
	
	//http://localhost:8090/SpringMVC/servlet/retrieveProduit/1
    @GetMapping("/retrieveProduit/{id_Produit}")
	public Produit retrieveDetailProduit(@PathVariable("id_Produit") long ProduitId) {
		return produitService.retrieveProduit(ProduitId);
	}
  //http://localhost:8081/SpringMVC/servlet/add-produit
  	@PostMapping("/add-produit")
  	public Produit addProduit(@RequestBody Produit dp)
  	{	return produitService.addProduit(dp,dp.getRayon().getIdRayon(),dp.getStock().getIdStock());
  	
  	}
  //http://localhost:8081/SpringMVC/servlet/update-produit
  	@PutMapping("/update-produit")
  	@ResponseBody
  	public Produit updateProduit(@RequestBody Produit p)
  	{
  		return produitService.updateProduit(p);
  	}
  	
  //http://localhost:8081/SpringMVC/servlet/delete-produit/"{id}"
  	@DeleteMapping("/delete-produit/{id}")
  	@ResponseBody
  	public void deleteProduit(@PathVariable Long id )
  	{
  		produitService.deleteProduit(id);
  	}
  	
  	
    // http://localhost:8081/SpringMVC/servlet/retrieve-produitByLibelle/laibelle
 	@GetMapping("/retrieve-produitByLibelle/{produit-libelle}")
 	public List <Produit> retrieveProduitByLibelle(@PathVariable("produit-libelle") String libelle) {
 		return produitService.retrieveProduitsByName(libelle);

 	}
 	
 	
	// http://localhost:8081/SpringMVC/servlet/retrieve-produitASC
	@GetMapping("/retrieve-produitASC")
	public List <Produit> retrieveProduitASC() {
		return produitService.TrieProduitASC();

	}
	

	// http://localhost:8081/SpringMVC/servlet/retrieve-produitDESC
	@GetMapping("/retrieve-produitDESC")
	public List <Produit> retrieveProduitDESC() {
		return produitService.TrieProduitDESC();

	}
}
