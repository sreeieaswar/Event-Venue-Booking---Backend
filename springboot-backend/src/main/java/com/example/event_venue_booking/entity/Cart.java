package com.example.event_venue_booking.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Cart {
    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long cartId;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private User customer;

    @ManyToOne
    @JoinColumn(name = "venue_id")
    private Venue venue;

    private LocalDate bookingDate;;
    private String slot;

    public Cart() {
    }

    public Cart(User customer, Venue venue, LocalDate bookingDate, String slot) {
        this.customer = customer;
        this.venue = venue;
        this.bookingDate = bookingDate;
        this.slot = slot;
    }
}
