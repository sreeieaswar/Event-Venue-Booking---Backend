package com.example.event_venue_booking.repository;

import com.example.event_venue_booking.entity.Cart;
import com.example.event_venue_booking.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart,Long> {

    List<Cart> findByCustomerUserId(Long customerId);

    List<Cart> findByCustomer(User customer);
}
