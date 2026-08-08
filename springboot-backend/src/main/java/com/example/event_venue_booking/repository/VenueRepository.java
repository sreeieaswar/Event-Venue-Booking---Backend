package com.example.event_venue_booking.repository;

import com.example.event_venue_booking.entity.Venue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VenueRepository extends JpaRepository<Venue,Long> {

    List<Venue> findByCategoryCategoryId(Long categoryId);
    List<Venue> findByLocationContainingIgnoreCase(String location);
    List<Venue> findByCapacityGreaterThanEqual(Integer capacity);
    List<Venue> findByPriceBetween(Double min, Double max);


    List<Venue> findByVenueOwnerUserId(Long userId);
}
