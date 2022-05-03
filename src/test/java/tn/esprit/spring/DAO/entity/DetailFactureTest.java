package tn.esprit.spring.DAO.entity;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DetailFactureTest {
    @Autowired
    tn.esprit.spring.service.IStockService  stockService ;
    @Autowired
    tn.esprit.spring.service.IRayonService rayonService ;
    @Autowired
    tn.esprit.spring.service.IDetailProduitService detailProduitService ;
    @Autowired
    tn.esprit.spring.service.IProduitService produitService ;
    @Autowired
    tn.esprit.spring.service.IFactureService factureService ;
    @Autowired
    tn.esprit.spring.service.IDetailFactureService detailFactureService ;
    @Autowired
    tn.esprit.spring.service.IClientService clientService ;

    @Test
    public void addDetailFactureTest(){
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
        f = factureService.addFacture(f);

        Rayon r = new Rayon();
        r.setCodeRayon("R72");
        r.setLibelleRayon("Rayon 72");
        r =rayonService.addRayon(r);
        Stock s = new Stock();
        s.setLibelleStock("Stock 1 test Razors");
        s.setQteMin(5);
        s.setQteStock(200);
        s = stockService.addStock(s);

        DetailProduit dp = new DetailProduit();
        dp.setCategorieProduit(CategorieProduit.ELECTROMENAGER);
        dp.setDatecreation(new Date());
        dp.setDateDernierModification(new Date());
        dp = detailProduitService.addDetailProduit(dp);

        Produit p = new Produit();
        p.setRayon(r);
        p.setStock(s);
        p.setCodeProduit("pr4twin1");
        p.setLibelleProduit("Test");
        p.setPrixUnitaire(10);
        p.setDetailproduit(dp);
        p = produitService.addProduit(p,r.getIdRayon(),s.getIdStock());

        int expectedSize = detailFactureService.retrieveAllDetailFacture().size();
        DetailFacture df = new DetailFacture();
        df.setFacture(f);
        df.setProduit(p);
        df.setQte(10);
        df.setPourcentageRemise(10);
        df.setMontantRemise(df.getProduit().getPrixUnitaire()*df.getQte()*df.getPourcentageRemise()/100);
        System.out.println(df.getMontantRemise());
        df.setPrixTotal(df.getProduit().getPrixUnitaire()*df.getQte()-df.getMontantRemise());
        df = detailFactureService.addDetailFacture(df);
        assertEquals(expectedSize+1, detailFactureService.retrieveAllDetailFacture().size());
        assertNotNull(df.getFacture().getIdFacture());
        assertNotNull(df.getFacture().getClient().getIdClient());
        assertNotNull(df.getProduit().getIdProduit());
        assertNotNull(df.getProduit().getRayon().getIdRayon());
        assertNotNull(df.getProduit().getStock().getIdStock());
        assertNotNull(df.getProduit().getDetailproduit().getIdDetailProduit());
    }



}