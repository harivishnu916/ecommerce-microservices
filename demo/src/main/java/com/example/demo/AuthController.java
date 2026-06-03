package com.example.demo;

import com.example.demo.Security.jwtutil;
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
            return "Login Success";
        }

        return "Invalid Credentials";
    }
}
