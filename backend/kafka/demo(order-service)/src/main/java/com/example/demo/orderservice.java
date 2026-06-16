package com.example.demo;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class orderservice {

    private final OrderRepository repository;
    private final KafkaProducerService kafkaProducerService;

    public orderservice(OrderRepository repository,
                        KafkaProducerService kafkaProducerService) {
        this.repository = repository;
        this.kafkaProducerService = kafkaProducerService;
    }

    public OrderEntity createOrder(OrderEntity order) {

        order.setStatus("CREATED");

        OrderEntity savedOrder = repository.save(order);

        kafkaProducerService.sendMessage(
                "Order Created : " + savedOrder.getId()
        );

        return savedOrder;
    }

    public List<OrderEntity> getAllOrders() {
        return repository.findAll();
    }

    public OrderEntity getOrder(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));
    }
}
