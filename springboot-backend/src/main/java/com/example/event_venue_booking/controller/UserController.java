package com.example.event_venue_booking.controller;

import com.example.event_venue_booking.entity.User;
import com.example.event_venue_booking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {


    @Autowired
    UserService userService;

    @PostMapping("user")
    public String createUser(@RequestBody User user){
        return userService.createUser(user);
    }

    @GetMapping("user/{userId}")
    public User getUserById(@PathVariable Long userId){
        return userService.getUserById(userId);
    }
}
