package tn.esprit.spring.DAO.entity;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DetailProduitTest {
    @Autowired
    tn.esprit.spring.service.IDetailProduitService detailProduitService ;

    @Test
    public void addDetailProduitTest(){
        int expectedSize = detailProduitService.retrieveAllDetailProduit().size();
        DetailProduit dp = new DetailProduit();
        dp.setCategorieProduit(CategorieProduit.ELECTROMENAGER);
        dp.setDatecreation(new Date());
        dp.setDateDernierModification(new Date());
        dp = detailProduitService.addDetailProduit(dp);
        assertEquals(expectedSize+1, detailProduitService.retrieveAllDetailProduit().size());
        assertNotNull(dp.getIdDetailProduit());
        detailProduitService.deleteDetailProduit(dp.getIdDetailProduit());
    }

}