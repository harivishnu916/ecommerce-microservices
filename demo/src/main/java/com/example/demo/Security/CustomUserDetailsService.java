package com.example.demo.Security;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class CustomUserDetailsService {

       @Bean
         public UserDetailsService userDetailsService() {
        return new InMemoryUserDetailsManager(); // ✅ no default user
    }
    
}
