package com.example.demo;

import com.example.demo.User;
import com.example.demo.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository repo;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public User signup(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        return repo.save(user);
    }

    public Optional<User> login(String email, String password) {
        Optional<User> user = repo.findByEmail(email);

        if (user.isPresent() && encoder.matches(password, user.get().getPassword())) {
            return user;
        }

        return Optional.empty();
    }

    public Optional<User> findByEmail(String email) {
        return repo.findByEmail(email);
    }
}
