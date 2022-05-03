package tn.esprit.spring.DAO.entity;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class ClientTest {
    @Autowired
    tn.esprit.spring.service.IClientService clientService;

    @Test
    public Client testAddClient(){
        int expectedSize = clientService.retrieveAllClients().size();
        Client c = new Client();
        c.setNom("Hammouda");
        c.setPrenom("MSaad");
        Date date = new Date();
        date.setDate(31);
        date.setMonth(8);
        date.setYear(1997);
        c.setPassword("4TWIN1");
        c.setEmail("hammouda.msaad@esprit.tn");
        c.setProfession(Role.INGENIEUR);
        c.setCatClient(CategorieClient.FIDELE);
        Client savedClient = clientService.addClient(c);
        assertEquals(expectedSize+1, clientService.retrieveAllClients().size());
        assertNotNull(savedClient.getNom());
        //clientService.deleteClient(savedClient.getIdClient());
        return savedClient;
    }
    @Test
    public void testupdateClient(){
        Client savedClient = this.testAddClient();
        Client c = savedClient ;
        c.setNom("Aymen Has Changed");
        Client savedClient2 = clientService.updateClient(c);
        assertNotNull(savedClient2.getNom());
        //assertNotEquals(savedClient.getNom().length(),savedClient2.getNom().length());
        //clientService.deleteClient(savedClient.getIdClient());
    }


}