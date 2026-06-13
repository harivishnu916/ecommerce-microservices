package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    @KafkaListener(topics = "order-topic", groupId = "payment-group")
    public void consume(String message) {

        System.out.println("Payment Failed : " + message);

        kafkaTemplate.send(
                "payment-failed-topic",
                "Payment Failed : " + message
        );

    }
}