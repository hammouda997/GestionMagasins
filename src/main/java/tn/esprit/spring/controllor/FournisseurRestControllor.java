package tn.esprit.spring.controllor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.spring.DAO.entity.Fournisseur;
import tn.esprit.spring.service.IFournisseurService;

@RestController
public class FournisseurRestControllor {
@Autowired
IFournisseurService fournisseurService;

// http://localhost:8081/SpringMVC/servlet/getFournisseur
@GetMapping("/getFournisseur")

public List<Fournisseur> getFournisseur() {
List<Fournisseur> listFournisseur = fournisseurService.retrieveAllFournisseur();
return listFournisseur;
}


// http://localhost:8081/SpringMVC/servlet/addFournisseur
@PostMapping("/addFournisseur")

public Fournisseur addFournisseur(@RequestBody Fournisseur f)
{
Fournisseur fournisseur = fournisseurService.addFournisseur(f);
return fournisseur;

}

// http://localhost:8081/SpringMVC/servlet/remove-fournisseur/{fournisseur-id}
@DeleteMapping("/remove-fournisseur/{fournisseur-id}")

public void removeFournisseur(@PathVariable("fournisseur-id") Long idFournisseur) {
fournisseurService.deleteFournisseur(idFournisseur);;
}
// http://localhost:8081/SpringMVC/servlet/modify-fournisseur
@PutMapping("/modify-fournisseur")

public Fournisseur modifyFournisseur(@RequestBody Fournisseur fournisseur) {
return fournisseurService.updateFournisseur(fournisseur);
}

}