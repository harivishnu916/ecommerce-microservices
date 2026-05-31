package com.hari.ecommerce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {
        @Autowired
    private ProductRepository productRepository;

    public List<productentity> getAllProducts() {

        return productRepository.findAll();

    }
    public productentity getProductById(Long id) {

    return productRepository
            .findById(id)
            .orElse(null);

}
}
