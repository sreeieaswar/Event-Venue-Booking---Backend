package com.example.event_venue_booking.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;

    @Column(nullable = false,unique = true)
    private String category;

    private String description;


    public Category( String category, String description) {
        this.category = category;
        this.description = description;
    }

    public Category() {
    }
}
