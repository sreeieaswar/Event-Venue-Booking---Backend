package com.example.event_venue_booking.controller;

import com.example.event_venue_booking.entity.Cart;
import com.example.event_venue_booking.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartController {

    @Autowired
    CartService cartService;

    //ADD TO CART
    @PostMapping("/cart")
    public String addToCart(@RequestBody Cart cart) {
        return cartService.addToCart(cart);
    }

    //CART VIEW
    @GetMapping("/cart")
    public List<Cart> getAllCart() {
        return cartService.getAllCart();
    }

    //CART VIEW BY UNIQUE ID
    @GetMapping("/cart/customer/{customerId}")
    public List<Cart> getCartByCustomerId(@PathVariable Long customerId) {
        return cartService.getCartByCustomerId(customerId);
    }

    //CART IS DELETED BY UNIQUE CART ID
    @DeleteMapping("/cart/{cartId}")
    public String deleteCart(@PathVariable Long cartId) {
        return cartService.deleteCart(cartId);
    }
}
