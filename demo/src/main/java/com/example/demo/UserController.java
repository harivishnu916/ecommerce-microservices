package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public UserEntity register(
            @RequestBody UserEntity user) {

        return service.register(user);

    }

    @PostMapping("/login")
    public String login(
            @RequestBody LoginRequest request) {

        return service.login(request);

    }

    @PostMapping("/forgot-password")
    public String forgotPassword(
            @RequestParam String email) {

        return service.forgotPassword(email);

    }

    @PostMapping("/verify-otp")
    public String verifyOtp(
            @RequestBody VerifyOtpRequest request) {

        return service.verifyOtp(
                request.getEmail(),
                request.getOtp());

    }

    @PostMapping("/reset-password")
    public String resetPassword(
            @RequestBody ResetPasswordRequest request) {

        return service.resetPassword(
                request.getEmail(),
                request.getPassword());
    }
    @PostMapping("/google-login")
public String googleLogin(
        @RequestBody Googleloginrequest request) {

    return service.googleLogin(request);

}

}
