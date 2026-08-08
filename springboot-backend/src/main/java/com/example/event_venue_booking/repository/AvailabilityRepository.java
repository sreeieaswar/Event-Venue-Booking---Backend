package com.example.event_venue_booking.repository;

import com.example.event_venue_booking.entity.Availability;
import com.example.event_venue_booking.entity.Venue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface AvailabilityRepository extends JpaRepository<Availability,Long> {
    Optional<Availability> findByVenueAndDate(Venue venue, LocalDate date);

}
