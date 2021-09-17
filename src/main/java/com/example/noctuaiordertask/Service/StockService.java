package com.example.noctuaiordertask.Service;

import com.example.noctuaiordertask.Entity.Stock;

import java.util.List;

public interface StockService {

   List<Stock> getAllStocks();

   Stock saveStock(Stock stock);

   Stock getStockByColorSize(String color, String size);

}
