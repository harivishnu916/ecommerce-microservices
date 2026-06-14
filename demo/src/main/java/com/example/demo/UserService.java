package com.example.demo;

import org.springframework.stereotype.Service;
import java.util.Random;
import com.example.demo.jwtutil;

@Service
public class UserService {

    private final UserRepository repository;
    private final MailService mailService;

    public UserService(
            UserRepository repository,
            MailService mailService) {

        this.repository = repository;
        this.mailService = mailService;
    }

    public UserEntity register(UserEntity user) {

        return repository.save(user);

    }

    public String login(LoginRequest request) {

        UserEntity user = repository.findByEmail(
                request.getEmail());

        if (user == null) {
            return "User Not Found";
        }

        if (!user.getPassword()
                .equals(request.getPassword())) {

            return "Invalid Password";
        }

        return "Login Success";
    }

    public String forgotPassword(String email) {

        UserEntity user = repository.findByEmail(email);

        if (user == null) {
            return "Email Not Found";
        }

        String otp = String.format(
                "%06d",
                new Random().nextInt(999999));

        user.setOtp(otp);

        user.setOtpExpiryTime(
                System.currentTimeMillis()
                        + 5 * 60 * 1000);

        repository.save(user);

        mailService.sendOtp(email, otp);

        return "OTP Sent Successfully";
    }

    public String verifyOtp(
            String email,
            String otp) {

        UserEntity user = repository.findByEmail(email);

        if (user == null) {
            return "User Not Found";
        }

        if (user.getOtp() == null) {
            return "OTP Not Generated";
        }

        if (System.currentTimeMillis() > user.getOtpExpiryTime()) {

            return "OTP Expired";
        }

        if (!user.getOtp().equals(otp)) {
            return "Invalid OTP";
        }

        user.setOtp(null);
        repository.save(user);

        return "OTP Verified";
    }

    public String resetPassword(
            String email,
            String password) {

        UserEntity user = repository.findByEmail(email);

        if (user == null) {
            return "User Not Found";
        }

        user.setPassword(password);

        user.setOtp(null);
        user.setOtpExpiryTime(null);

        repository.save(user);

        return "Password Reset Successfully";
    }

    public String googleLogin(
            Googleloginrequest request) {

        UserEntity user = repository.findByEmail(
                request.getEmail());

        if (user == null) {

            user = new UserEntity();

            user.setName(request.getName());
            user.setEmail(request.getEmail());
            user.setPassword("GOOGLE_USER");

            repository.save(user);
        }

        return jwtutil.generateToken(
                request.getEmail());
    }
}
