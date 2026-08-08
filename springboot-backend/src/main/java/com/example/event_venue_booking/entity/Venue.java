package com.example.event_venue_booking.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Venue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long venueId;

    private String venueName;
    private String location;
    private Integer capacity;
    private Double price;
    private String description;
    private String imageUrl;
    private String services;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name="owner_id")
    private User venueOwner;

    public Venue() {
    }

    public Venue(String venueName, String location, Integer capacity, Double price, String description, String imageUrl, String services, Category category, User venueOwner) {
        this.venueName = venueName;
        this.location = location;
        this.capacity = capacity;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.services = services;
        this.category = category;
        this.venueOwner = venueOwner;
    }
}
