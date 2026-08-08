package com.example.event_venue_booking.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Availability {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long availabilityId;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private Integer totalSlots;

    @Column(nullable = false)
    private Integer availableSlots;

    @ManyToOne
    @JoinColumn(name = "venue_id", nullable = false)
    private Venue venue;

    public Availability() {
    }

    public Availability(LocalDate date, Integer totalSlots, Integer availableSlots, Venue venue) {
        this.date = date;
        this.totalSlots = totalSlots;
        this.availableSlots = availableSlots;
        this.venue = venue;
    }
}