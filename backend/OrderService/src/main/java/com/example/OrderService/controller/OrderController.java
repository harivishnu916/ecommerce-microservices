package com.example.OrderService.controller;

import com.example.OrderService.entity.OrderEntity;
import com.example.OrderService.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService service;

    public OrderController(OrderService service) {
        this.service = service;
    }

    @PostMapping
    public OrderEntity createOrder(@RequestBody OrderEntity order) {
        return service.createOrder(order);
    }

    @GetMapping
    public List<OrderEntity> getAllOrders() {
        return service.getAllOrders();
    }

    @GetMapping("/{id}")
    public OrderEntity getOrder(@PathVariable Long id) {
        return service.getOrder(id);
    }
}