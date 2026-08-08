package com.example.event_venue_booking.service;

import com.example.event_venue_booking.entity.Availability;
import com.example.event_venue_booking.entity.Booking;
import com.example.event_venue_booking.entity.Cart;
import com.example.event_venue_booking.entity.User;
import com.example.event_venue_booking.repository.AvailabilityRepository;
import com.example.event_venue_booking.repository.BookingRepository;
import com.example.event_venue_booking.repository.CartRepository;
import com.example.event_venue_booking.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BookingService {

    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    AvailabilityRepository availabilityRepository;
    @Autowired
    CartRepository cartRepository;


    public String checkout(Long userId) {

        User customer = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        List<Cart> cartItems = cartRepository.findByCustomer(customer);

        if (cartItems.isEmpty()) {
            return "Cart is empty";
        }

        for (Cart cart : cartItems) {

            Availability availability = availabilityRepository
                    .findByVenueAndDate(cart.getVenue(), cart.getBookingDate())
                    .orElseThrow(() -> new RuntimeException("Availability not found"));

            if (availability.getAvailableSlots() <= 0) {
                return "No slots available for " + cart.getVenue().getVenueName();
            }

            availability.setAvailableSlots(availability.getAvailableSlots() - 1);
            availabilityRepository.save(availability);

            Booking booking = new Booking();

            booking.setCustomer(customer);
            booking.setVenue(cart.getVenue());
            booking.setBookingDate(cart.getBookingDate());
            booking.setSlot(cart.getSlot());
            booking.setTotalAmount(cart.getVenue().getPrice());
            booking.setStatus("CONFIRMED");
            booking.setBookingTime(LocalDateTime.now());

            bookingRepository.save(booking);
        }

        cartRepository.deleteAll(cartItems);

        return "Checkout completed successfully";

    }

    //TO SHOW CUSTOMER THEIR BOOKINGS
    public List<Booking> getMyBookings(Long userId) {
        User customer = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));
        return bookingRepository.findByCustomer(customer);
    }

    //TO SHOW VENUE OWNER THEIR VENUE BOOKINGS
    public List<Booking> getBookingsForOwner(Long ownerId) {
        User owner = userRepository.findById(ownerId)
                .orElseThrow(() -> new RuntimeException("Venue Owner not found"));
        return bookingRepository.findByVenue_VenueOwner(owner);
    }

    //TO SHOW ADMIN-ALL BOOKINGS
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    //Admin - Update Booking Status
    public String updateBookingStatus(Long bookingId, String status) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setStatus(status);

        bookingRepository.save(booking);
        return "Booking status updated successfully";
    }

}
