package tn.esprit.spring.DAO.entity;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class FournisseurTest {
    @Autowired
    tn.esprit.spring.service.IFournisseurService fournisseurService ;

    @Test
    public void addFournisseurTest(){
        int expectedSize = fournisseurService.retrieveAllFournisseur().size();
        Fournisseur f = new Fournisseur();
        f.setCodeFournisseur("F2021");
        f.setLibelleFournisseur("Fournisseur Test");
        f= fournisseurService.addFournisseur(f);
        assertEquals(expectedSize+1, fournisseurService.retrieveAllFournisseur().size());
        assertNotNull(f.getIdFournisseur());
        fournisseurService.deleteFournisseur(f.getIdFournisseur());
    }

}