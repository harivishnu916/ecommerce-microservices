package com.hari.ecommerce;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository
        extends JpaRepository<CartEntity, Long> {

}
