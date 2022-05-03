package tn.esprit.spring.service;

import java.util.Date;
import java.util.List;

import tn.esprit.spring.DAO.entity.CategorieClient;
import tn.esprit.spring.DAO.entity.Client;
import tn.esprit.spring.DAO.entity.Role;


public interface IClientService  {

	
	
	List<Client> retrieveAllClients();

	Client addClient(Client c);

	Client updateClient(Client c);

	Client retrieveClient(Long id);
	 void deleteClient(Long id);
	List <Client>  retrieveClientsByProfession( Role profession);
	Long updateClientCategorieByProfession(CategorieClient	categorieClient ,Role profession);
	Long deleteClientByCategorieClientAndProfession(CategorieClient	categorieClient ,Role profession);
	void insertClient(String nom, String prenom, Date dateNaissance, String email,String password, Role profession,CategorieClient catClient);

}
