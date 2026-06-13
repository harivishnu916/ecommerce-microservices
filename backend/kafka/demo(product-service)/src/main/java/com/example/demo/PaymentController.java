package com.example.demo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    private final PaymentService service;

    public PaymentController(PaymentService service) {
        this.service = service;
    }

    @PostMapping
    public PaymentEntity createPayment(@RequestBody PaymentEntity payment) {
        return service.createPayment(payment);
    }

    @GetMapping
    public List<PaymentEntity> getAllPayments() {
        return service.getAllPayments();
    }

    @GetMapping("/{id}")
    public PaymentEntity getPaymentById(@PathVariable Long id) {
        return service.getPaymentById(id);
    }
}