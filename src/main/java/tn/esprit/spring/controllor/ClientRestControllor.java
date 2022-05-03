package tn.esprit.spring.controllor;

import tn.esprit.spring.DAO.entity.Client;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.spring.service.IClientService;

@RestController
public class ClientRestControllor {
@Autowired
IClientService ClientService ; 
//http://localhost:8081/SpringMVC/servlet/getAllClient
@GetMapping("/getAllClient")
public List<Client> getClients() {
List<Client> listClients = ClientService.retrieveAllClients();
return listClients;
}
//http://localhost:8081/SpringMVC/servlet/getClient/{id_client}
@GetMapping("/getClient/{id_client}")

public Client retrieveClient(@PathVariable("id_client") Long clientId) {
return ClientService.retrieveClient(clientId);
}
//http://localhost:8081/SpringMVC/servlet/add-client
@PostMapping("/add-client")
@ResponseBody
public Client addClient(@RequestBody Client c)
{
Client client = ClientService.addClient(c);
return client;
}
//http://localhost:8081/SpringMVC/servlet/remove-client/{client-id}
@DeleteMapping("/remove-client/{client-id}")
@ResponseBody
public void removeClient(@PathVariable("client-id") Long clientId) {
ClientService.deleteClient(clientId);
}

//http://localhost:8081/SpringMVC/servlet/modify-client
@PutMapping("/modify-client")
@ResponseBody
public Client modifyClient(@RequestBody Client client) {
return ClientService.updateClient(client);
}

}