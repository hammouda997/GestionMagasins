package tn.esprit.spring.DAO.entity;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class StockTest {

    @Autowired
    tn.esprit.spring.service.IStockService stockService;

    @Test
    public void addStockTest(){
        int expectedSize = stockService.retrieveAllStocks().size();
        Stock s = new Stock();
        s.setLibelleStock("Stock 1 test Razors");
        s.setQteMin(5);
        s.setQteStock(200);
        s = stockService.addStock(s);
        assertEquals(expectedSize+1, stockService.retrieveAllStocks().size());
        assertNotNull(s.getIdStock());
        stockService.deleteStock(s.getIdStock());

    }

}