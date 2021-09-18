package com.example.noctuaiordertask.Service.ServiceImpl;

import com.example.noctuaiordertask.Entity.Orders;
import com.example.noctuaiordertask.Entity.Stock;
import com.example.noctuaiordertask.Repository.OrderDao;
import com.example.noctuaiordertask.Repository.StockDao;
import com.example.noctuaiordertask.Service.OrderService;
import com.example.noctuaiordertask.exception.OutOfStockException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    private OrderDao orderDao;

    private StockDao stockDao;

    @Autowired
    public OrderServiceImpl(OrderDao orderDao, StockDao stockDao) {
        this.orderDao = orderDao;
        this.stockDao = stockDao;
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
    @Transactional
    public boolean saveAllOrders(List<Orders> orders) {
        orders.parallelStream().forEach(order -> {
            final Stock stock = stockDao.getStockByColorAndSize(order.getColor(), order.getSize());
            assert stock != null;
            if (stock.getCount() - order.getCount() < 0) {
                throw new OutOfStockException("there is not enough product quantity for your order.");

            }
            stock.setCount(stock.getCount() - order.getCount());
            stockDao.saveAndFlush(stock);
            orderDao.saveAndFlush(order);
        });
//        orderDao.saveAllAndFlush(orders);
        return true;
    }
}
