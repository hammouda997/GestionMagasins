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
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.DAO.entity.DetailFacture;
import tn.esprit.spring.DAO.entity.Facture;
import tn.esprit.spring.service.IDetailFactureService;
import tn.esprit.spring.service.IFactureService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class DetailFactureRestController {
	@Autowired
	IDetailFactureService detailfactureService;

	// http://localhost:8081/SpringMVC/servlet/getDetailFactures
	@GetMapping("/getDetailFactures")

	public List<DetailFacture> getFactures() {
	List<DetailFacture> listDFactures = detailfactureService.retrieveAllDetailFacture();
	return listDFactures;
	}

	// http://localhost:8081/SpringMVC/servlet/retrieve-dfacture/1
	@GetMapping("/retrieve-dfacture/{dfacture-id}")

	public DetailFacture retrieveDetailFacture(@PathVariable("dfacture-id") Long dfactureId) {
	return detailfactureService.retrieveDetailFacture(dfactureId);
	}

	// http://localhost:8081/SpringMVC/servlet/add-facture
	@PostMapping("/add-dfacture")

	public DetailFacture addDetailFacture(@RequestBody DetailFacture f) {
		DetailFacture detailfacture = detailfactureService.addDetailFacture(f);
	return detailfacture;
	}
	// http://localhost:8081/SpringMVC/servlet/remove-dfacture/{dfacture-id}
	@DeleteMapping("/remove-dfacture/{fdacture-id}")

	public void removeFacture(@PathVariable("dfacture-id") Long dfactureId) {
		detailfactureService.deleteDetailFacture(dfactureId);
	}
	// http://localhost:8081/SpringMVC/servlet/modify-dfacture
	@PutMapping("/modify-dfacture")

	public DetailFacture modifyFacture(@RequestBody DetailFacture dfacture) {
	return detailfactureService.updateDetailFacture(dfacture);
	}
	}

