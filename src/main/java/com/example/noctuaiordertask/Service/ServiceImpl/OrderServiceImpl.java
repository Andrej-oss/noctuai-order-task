package com.example.noctuaiordertask.Service.ServiceImpl;

import com.example.noctuaiordertask.Entity.Orders;
import com.example.noctuaiordertask.Repository.OrderDao;
import com.example.noctuaiordertask.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    private OrderDao orderDao;

    @Autowired
    public OrderServiceImpl(OrderDao orderDao) {
        this.orderDao = orderDao;
    }

    @Override
    public List<Orders> getAllOrders() {
        return orderDao.findAll();
    }

    @Override
    public Orders getOrderById(long id) {
        return orderDao.getById(id);
    }

    @Override
    public void saveOrder(Orders order) {
        orderDao.saveAndFlush(order);
    }

    @Override
    public boolean updateOrder(long id, Orders order) {
        return false;
    }

    @Override
    public void deleteOrder(long id) {

    }

    @Override
    public boolean saveAllOrders(List<Orders> orders) {
        //orders.parallelStream().forEach(orderDao::sa);
        orderDao.saveAllAndFlush(orders);
        return true;
    }
}
