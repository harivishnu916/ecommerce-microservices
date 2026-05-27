package com.example.auth_service.controller;

import com.example.auth_service.model.User;
import com.example.auth_service.security.JwtUtil;
import com.example.auth_service.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    private final UserService service;

    public AuthController(UserService service) {
        this.service = service;
    }

    // SIGNUP
    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return service.signup(user);
    }

    // LOGIN
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User user) {

        Optional<User> found = service.login(user.getEmail(), user.getPassword());

        if (found.isPresent()) {
            String token = JwtUtil.generateToken(user.getEmail());
            return Map.of("token", token);
        }

        throw new RuntimeException("Invalid credentials");
    }
}