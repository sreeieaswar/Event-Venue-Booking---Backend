package com.example.event_venue_booking.service;

import com.example.event_venue_booking.entity.Category;
import com.example.event_venue_booking.entity.User;
import com.example.event_venue_booking.entity.Venue;
import com.example.event_venue_booking.repository.CategoryRepository;
import com.example.event_venue_booking.repository.UserRepository;
import com.example.event_venue_booking.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VenueService {

    @Autowired
    VenueRepository venueRepository;
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    UserRepository userRepository;

    public String createVenue(Venue venue) {
        Long categoryId = venue.getCategory().getCategoryId();
        Category category = categoryRepository.findById(categoryId).orElse(null);

        Long ownerId = venue.getVenueOwner().getUserId();
        User owner = userRepository.findById(ownerId).orElse(null);

        if (category == null) {
            return "CATEGORY NOT FOUND";
        }
        if (owner == null) {
            return "VENUEOWNER NOT FOUND";
        }
        venue.setCategory(category);
        venue.setVenueOwner(owner);

        venueRepository.save(venue);

        return "VENUE CREATED SUCCESSFULLY!";
    }

    public List<Venue> getvenue() {
        return venueRepository.findAll();
    }

    public Venue getVenueById(Long venueId) {
        return venueRepository.findById(venueId).orElse(null);
    }

    public String updateVenue(Venue venue) {
        if(!venueRepository.existsById(venue.getVenueId())){
            return"NO DATA FOUND!";
        }else{
            venueRepository.save(venue);
        }
        return "VENUE UPDATION COMPLETED!!!";

    }

    public String deleteVenueById(Long venueId) {
        if(!venueRepository.existsById(venueId)){
            return "NO SUCH VENUE ID FOUND!!";
        }else{
            venueRepository.deleteById(venueId);
        }
        return "DELETED SUCCESSFULLY!!!";
    }

    public List<Venue> getVenueByOwnerId(Long ownerId) {
        return venueRepository.findByVenueOwnerUserId(ownerId);
    }


//The below is for the user to search on website based on each category

    public List<Venue> searchByCategory(Long categoryId) {
        return venueRepository.findByCategoryCategoryId(categoryId);
    }

    public List<Venue> searchByLocation(String location) {
        return venueRepository.findByLocationContainingIgnoreCase(location);
    }

    public List<Venue> searchByCapacity(Integer capacity) {
        return venueRepository.findByCapacityGreaterThanEqual(capacity);
    }

    public List<Venue> searchByPrice(Double min, Double max) {
        return venueRepository.findByPriceBetween(min, max);
    }

}



