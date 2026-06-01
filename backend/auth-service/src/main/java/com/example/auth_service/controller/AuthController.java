package com.example.auth_service.controller;

import com.example.auth_service.model.User;
import com.example.auth_service.security.JwtUtil;
import com.example.auth_service.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return userService.signup(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        Optional<User> u = userService.login(user.getEmail(), user.getPassword());

        if (u.isPresent()) {
            return JwtUtil.generateToken(user.getEmail());
        }

        return "Invalid credentials";
    }
}