package com.example.noctuaiordertask.Repository;

import com.example.noctuaiordertask.Entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockDao extends JpaRepository<Stock, Long> {

    Stock getStockByColorAndSize(String color, String size);
}
