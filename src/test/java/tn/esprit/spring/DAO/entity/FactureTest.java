package tn.esprit.spring.DAO.entity;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class FactureTest {
    @Autowired
    tn.esprit.spring.service.IClientService clientService;
    @Autowired
    tn.esprit.spring.service.IFactureService factureService
            ;
    @Test
    public void addFactureTest(){
        int expectedSize = factureService.retrieveAllFacture().size();
        Client c = new Client();
        c.setNom("Hammouda");
        c.setPrenom("MSaad");
        Date date = new Date();
        date.setDate(31);
        date.setMonth(8);
        date.setYear(1997);
        c.setDateNaissance(date);
        c.setPassword("4TWIN1");
        c.setEmail("hammouda.msaad@esprit.tn");
        c.setProfession(Role.INGENIEUR);
        c.setCatClient(CategorieClient.FIDELE);
        c = clientService.addClient(c);
        Facture f = new Facture();
        f.setClient(c);
        f.setDateFacture(new Date());
        f.setMontantFacture(200);
        f.setMontantRemise(12);
        Facture savedFacture =factureService.addFacture(f);
        assertEquals(expectedSize+1, factureService.retrieveAllFacture().size());
        assertNotNull(savedFacture.getDateFacture());
        assertTrue(savedFacture.isActive());
        factureService.deleteFacture(savedFacture.getIdFacture());
    }

}