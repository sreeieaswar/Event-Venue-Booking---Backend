package com.example.event_venue_booking.service;

import com.example.event_venue_booking.entity.Cart;
import com.example.event_venue_booking.entity.User;
import com.example.event_venue_booking.entity.Venue;
import com.example.event_venue_booking.repository.CartRepository;
import com.example.event_venue_booking.repository.UserRepository;
import com.example.event_venue_booking.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    CartRepository cartRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    VenueRepository venueRepository;

    //ADD TO CART
    public String addToCart(Cart cart) {
    Long customerId = cart.getCustomer().getUserId();
    User customer = userRepository.findById(customerId).orElse(null);
        if (customer == null) {
        return "CUSTOMER NOT FOUND";
    }
    Long venueId = cart.getVenue().getVenueId();
    Venue venue = venueRepository.findById(venueId).orElse(null);
        if (venue == null) {
        return "VENUE NOT FOUND";
    }

        cart.setCustomer(customer);
        cart.setVenue(venue);

        cartRepository.save(cart);

        return "ADDED TO CART SUCCESSFULLY!";
}

    //CART VIEW
    public List<Cart> getAllCart() {
        return cartRepository.findAll();
}

    //CART VIEW BY UNIQUE ID
    public List<Cart> getCartByCustomerId(Long customerId) {
        return cartRepository.findByCustomerUserId(customerId);
}

    //CART IS DELETED BY UNIQUE CART ID
    public String deleteCart(Long cartId) {
          if (!cartRepository.existsById(cartId)) {
              return "CART ITEM NOT FOUND";
    }
    cartRepository.deleteById(cartId);
    return "CART ITEM REMOVED SUCCESSFULLY!";
}
}
