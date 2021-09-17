package com.example.noctuaiordertask.Service.ServiceImpl;

import com.example.noctuaiordertask.Entity.Stock;
import com.example.noctuaiordertask.Repository.StockDao;
import com.example.noctuaiordertask.Service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockServiceImpl implements StockService {

    private StockDao stockDao;

    @Autowired
    public StockServiceImpl(StockDao stockDao) {
        this.stockDao = stockDao;
    }

    @Override
    public List<Stock> getAllStocks() {
        return stockDao.findAll();
    }

    @Override
    public Stock saveStock(Stock stock) {
        stockDao.save(stock);
        return stock;
    }

    @Override
    public Stock getStockByColorSize(String color, String size) {
        return stockDao.getStockByColorAndSize(color, size);
    }
}
