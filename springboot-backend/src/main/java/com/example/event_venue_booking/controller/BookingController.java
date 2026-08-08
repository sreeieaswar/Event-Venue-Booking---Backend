package com.example.event_venue_booking.controller;

import com.example.event_venue_booking.entity.Booking;
import com.example.event_venue_booking.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookingController {

    @Autowired
    BookingService bookingService;

    @PostMapping("/checkout/{userId}")
    public String checkout(@PathVariable Long userId) {
        return bookingService.checkout(userId);
    }

    //TO SHOW CUSTOMER THEIR BOOKINGS
    @GetMapping("/customer/{userId}")
    public List<Booking> getMyBookings(@PathVariable Long userId) {
        return bookingService.getMyBookings(userId);
    }

    //TO SHOW VENUE OWNER THEIR VENUE BOOKINGS
    @GetMapping("/owner/{ownerId}")
    public List<Booking> getBookingsForOwner(@PathVariable Long ownerId) {
        return bookingService.getBookingsForOwner(ownerId);
    }

    //TO SHOW ADMIN-ALL BOOKINGS
    @GetMapping("/admin")
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    //Admin - Update Booking Status
    @PutMapping("admin/{bookingId}/{status}")
    public String updateBookingStatus(@PathVariable Long bookingId,
                                      @PathVariable String status) {
        return bookingService.updateBookingStatus(bookingId, status);
    }
}
