package com.example.noctuaiordertask.Controller;

import com.example.noctuaiordertask.Entity.Orders;
import com.example.noctuaiordertask.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class OrderController {

    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/order")
    public List<Orders> getAllOrders(){
        return orderService.getAllOrders();
    }

    @PostMapping("/order")
    public void saveOrder(@Valid @RequestBody Orders order){
        orderService.saveOrder(order);
    }
    @PutMapping("/order/{id}")
    public boolean updateOrder(@RequestBody Orders order, @PathVariable long id){
        return orderService.updateOrder(id, order);
    }
    @DeleteMapping("/order/{id}")
    public void deleteOrder(@PathVariable long id){
        orderService.deleteOrder(id);
    }
}
