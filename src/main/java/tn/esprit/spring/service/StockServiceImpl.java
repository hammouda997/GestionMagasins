package tn.esprit.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.DAO.entity.Produit;
import tn.esprit.spring.DAO.entity.Stock;
import tn.esprit.spring.DAO.repository.ProduitRepository;
import tn.esprit.spring.DAO.repository.StockRepository;

@Service
public class StockServiceImpl implements IStockService{

	
@Autowired
	StockRepository stocktRepository;

	
	
	@Override
	public List<Stock> retrieveAllStocks() {
		List<Stock> stocks =(List<Stock> )stocktRepository.findAll();

		for (Stock s: stocks){
			
			System.out.println("test");
		}
		return stocks;

		}

	@Override
	public Stock addStock(Stock s) {
		return stocktRepository.save(s);
	}

	@Override
	public Stock updateStock(Stock u) {
		stocktRepository.save(u);
		return u;

	}

	@Override
	public Stock retrieveStock(Long id) {
		 return stocktRepository.findById(id).get();
	}

	@Override
	public void deleteStock(Long id) {
		stocktRepository.deleteById(id);
		
	}
	}
