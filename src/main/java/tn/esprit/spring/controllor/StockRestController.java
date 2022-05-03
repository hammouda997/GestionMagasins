package tn.esprit.spring.controllor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.spring.DAO.entity.Stock;
import tn.esprit.spring.service.IStockService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class StockRestController {
@Autowired
IStockService StockService ;
//http://localhost:8081/SpringMVC/servlet/getAllStock
@GetMapping("/getAllStock")
public List<Stock> getStocks(){
List<Stock> listStock = StockService.retrieveAllStocks();
return listStock;
}
//http://localhost:8081/SpringMVC/servlet/retrieveStock/1
 @GetMapping("/retrieveStock/{id_Stock}")
public Stock retrieveStock(@PathVariable("id_Stock") long StockId) {
return StockService.retrieveStock(StockId);
}
//http://localhost:8081/SpringMVC/servlet/add-Stock
 @PostMapping("/add-Stock")

 public Stock addStock(@RequestBody Stock c)
 {
 Stock Stock = StockService.addStock(c);
 return Stock;
 }
 
//http://localhost:8081/SpringMVC/servlet/remove-stock/{stock-id}
 @DeleteMapping("/remove-stock/{idStock}")
 public void removeStock(@PathVariable("idStock") Long idStock) {
 StockService.deleteStock(idStock);
 }
 
   
}
