package com.example.demo;

import com.example.demo.OrderEntity;
import com.example.demo.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class orderservice {

    private final OrderRepository repository;

    public orderservice(OrderRepository repository) {
        this.repository = repository;
    }

    public OrderEntity createOrder(OrderEntity order) {
        order.setStatus("CREATED");
        return repository.save(order);
    }

    public List<OrderEntity> getAllOrders() {
        return repository.findAll();
    }

    public OrderEntity getOrder(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));
    }
}
