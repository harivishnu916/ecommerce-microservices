package com.hari.ecommerce;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    private CartRepository cartRepository;

    @PostMapping("/cart")
    public CartEntity addToCart(
            @RequestBody CartEntity cart) {

        return cartRepository.save(cart);
    }

    @GetMapping("/cart")
    public List<CartEntity> getCart() {

        return cartRepository.findAll();
    }

    @DeleteMapping("/cart/{id}")
    public void removeCartItem(
            @PathVariable Long id) {

        cartRepository.deleteById(id);
    }
}
