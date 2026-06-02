package com.example.PaymentService.service;

import com.example.PaymentService.entity.PaymentEntity;
import com.example.PaymentService.repository.PaymentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {

    private final PaymentRepository repository;

    public PaymentService(PaymentRepository repository) {
        this.repository = repository;
    }

    public PaymentEntity createPayment(PaymentEntity payment) {
        payment.setPaymentStatus("SUCCESS");
        return repository.save(payment);
    }

    public List<PaymentEntity> getAllPayments() {
        return repository.findAll();
    }

    public PaymentEntity getPaymentById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Payment not found"));
    }
}