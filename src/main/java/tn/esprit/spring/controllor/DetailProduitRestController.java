package tn.esprit.spring.controllor;

import java.util.List;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import tn.esprit.spring.service.IDetailProduitService;
import tn.esprit.spring.DAO.entity.DetailProduit;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class DetailProduitRestController {
@Autowired
IDetailProduitService DetailProduitService;
//http://localhost:8081/SpringMVC/servlet/getAllDetailProduit
@GetMapping("/getAllDetailProduit")
public List<DetailProduit> getDetailProduit() {
return DetailProduitService.retrieveAllDetailProduit();

}
//http://localhost:8081/SpringMVC/servlet/retrieveDetailProduit/1
    @GetMapping("/retrieveDetailProduit/{id_DetailProduit}")
public DetailProduit retrieveDetailProduit(@PathVariable("id_DetailProduit") long DetailProduitId) {
return DetailProduitService.retrieveDetailProduit(DetailProduitId);
}
   
    //http://localhost:8081/SpringMVC/servlet/add-DetailProduit
  @PostMapping("/add-DetailProduit")
  public DetailProduit addProduit(@RequestBody DetailProduit dp)
  {
  DetailProduit DetailProduit = DetailProduitService.addDetailProduit(dp);
  return DetailProduit;
  }
  //http://localhost:8081/SpringMVC/servlet/remove-DetailProduit/{DetailProduit-id}
  @DeleteMapping("/remove-DetailProduit/{DetailProduit-id}")

  public void deleteDetailProduit(@PathVariable("DetailProduit-id") Long DetailProduitId) {
  DetailProduitService.deleteDetailProduit(DetailProduitId);
  }
 
    //http://localhost:8081/SpringMVC/servlet/update-DetailProduit
    @PutMapping("/update-DetailProduit")
    @ResponseBody
    public DetailProduit modifyDetailProduit(@RequestBody DetailProduit dp)
    {
    return DetailProduitService.updateDetailProduit(dp);
    }
}
