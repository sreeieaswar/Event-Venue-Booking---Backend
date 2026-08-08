package com.example.event_venue_booking.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private User customer;

    @ManyToOne
    @JoinColumn(name = "venue_id")
    private Venue venue;

    private LocalDate bookingDate;

    private String slot;

    private Double totalAmount;

    private String status;

    private LocalDateTime bookingTime;

    public Booking() {
    }

    public Booking(User customer, Venue venue, LocalDate bookingDate, String slot, Double totalAmount, String status, LocalDateTime bookingTime) {
        this.customer = customer;
        this.venue = venue;
        this.bookingDate = bookingDate;
        this.slot = slot;
        this.totalAmount = totalAmount;
        this.status = status;
        this.bookingTime = bookingTime;
    }
}
