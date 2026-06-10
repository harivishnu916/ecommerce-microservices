package com.example.demo;

import org.springframework.web.bind.annotation.*;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.ratelimiter.annotation.RateLimiter;

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

    // Circuit Breaker Test
    @GetMapping("/test-payment")
    @CircuitBreaker(
            name = "paymentService",
            fallbackMethod = "fallbackResponse"
    )
    public String testPayment() {

        throw new RuntimeException("Payment Service Down");

    }

    public String fallbackResponse(Exception ex) {

        return "Payment Service Temporarily Unavailable";

    }

    // Rate Limiter Test
    @GetMapping("/rate-test")
    @RateLimiter(
            name = "orderRateLimiter",
            fallbackMethod = "rateLimitFallback"
    )
    public String rateTest() {

        return "Request Accepted";

    }

    public String rateLimitFallback(Exception ex) {

        return "Too Many Requests. Please Try Again Later.";

    }
}