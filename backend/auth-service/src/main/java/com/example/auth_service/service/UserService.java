package com.example.auth_service.service;

import com.example.auth_service.model.User;
import com.example.auth_service.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    // ✅ SIGNUP
    public User signup(User user) {
        return repo.save(user);
    }

    // ✅ LOGIN
    public Optional<User> login(String email, String password) {
        Optional<User> user = repo.findByEmail(email);

        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user;
        }

        return Optional.empty();
    }

    // 🔥 NEW METHOD (IMPORTANT)
    public Optional<User> findByEmail(String email) {
        return repo.findByEmail(email);
    }
}