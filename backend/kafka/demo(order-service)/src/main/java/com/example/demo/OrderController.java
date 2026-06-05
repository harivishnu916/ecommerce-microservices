package com.example.demo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final orderservice service;

    public OrderController(orderservice service) {
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
