package com.hari.ecommerce;

import org.springframework.data.jpa.repository.JpaRepository;



public interface ProductRepository
        extends JpaRepository< productentity, Long> {

}
