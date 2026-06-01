package com.example.OrderService.service;

import com.example.OrderService.entity.OrderEntity;
import com.example.OrderService.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository repository;

    public OrderService(OrderRepository repository) {
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