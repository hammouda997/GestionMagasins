package tn.esprit.spring.DAO.entity;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.Date;

@SpringBootTest
class RayonTest {
    @Autowired
    tn.esprit.spring.service.IRayonService rayonService;
    @Test
    public void addRayonTest(){
        int expectedSize = rayonService.retrieveAllRayon().size();
        Rayon r = new Rayon();
        r.setCodeRayon("R72");
        r.setLibelleRayon("Rayon 72");
        r =rayonService.addRayon(r);
        assertEquals(expectedSize+1, rayonService.retrieveAllRayon().size());
        assertNotNull(r.getCodeRayon());
        rayonService.deleteRayon(r.getIdRayon());

    }

}