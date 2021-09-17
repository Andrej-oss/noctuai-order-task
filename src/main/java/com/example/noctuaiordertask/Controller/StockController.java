package com.example.noctuaiordertask.Controller;

import com.example.noctuaiordertask.Entity.Stock;
import com.example.noctuaiordertask.Service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(value = "http://localhost:4200/")
public class StockController {

    private StockService stockService;

    @Autowired
    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @PostMapping("/stock")
    public Stock saveStock(@Valid @RequestBody Stock stock){
        return stockService.saveStock(stock);
    }
    @GetMapping("/stock")
    public List<Stock> getAllStocks(){
        return stockService.getAllStocks();
    }
}
