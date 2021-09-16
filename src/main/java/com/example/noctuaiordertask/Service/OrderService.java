package com.example.noctuaiordertask.Service;

import com.example.noctuaiordertask.Entity.Orders;

import java.util.List;

public interface OrderService {

    List<Orders> getAllOrders();
    Orders getOrderById(long id);
    void saveOrder(Orders order);
    boolean updateOrder(long id, Orders order);
    void deleteOrder(long id);

    boolean saveAllOrders(List<Orders> orders);
}
