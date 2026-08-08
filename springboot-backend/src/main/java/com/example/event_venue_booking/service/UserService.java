package com.example.event_venue_booking.service;

import com.example.event_venue_booking.entity.User;
import com.example.event_venue_booking.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public String createUser(User user) {
         userRepository.save(user);
         return "SUCCESSFULLY CREATED AN USERID!!!";
    }

    public User getUserById(Long userId) {
         return userRepository.findById(userId)
                 .orElseThrow(()->new RuntimeException("USER NOT FOUND!!!"));
    }
}
