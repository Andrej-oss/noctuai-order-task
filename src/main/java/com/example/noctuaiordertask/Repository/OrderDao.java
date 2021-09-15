package com.example.noctuaiordertask.Repository;

import com.example.noctuaiordertask.Entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDao extends JpaRepository<Orders, Long> {
}
