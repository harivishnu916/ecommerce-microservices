package com.example.demo;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {

    @KafkaListener(topics = "order-topic", groupId = "product-group")
    public void consume(String message) {

        System.out.println("Stock Updated : " + message);

    }
}