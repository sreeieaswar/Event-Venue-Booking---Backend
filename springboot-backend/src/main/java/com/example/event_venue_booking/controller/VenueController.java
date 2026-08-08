package com.example.event_venue_booking.controller;

import com.example.event_venue_booking.entity.Category;
import com.example.event_venue_booking.entity.Venue;
import com.example.event_venue_booking.service.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VenueController {

    @Autowired
    VenueService venueService;

    @PostMapping("venue")
    public String createVenue(@RequestBody Venue venue){
        return venueService.createVenue(venue);
    }

    @GetMapping("venue")
    public List<Venue> getVenue(){

        return venueService.getvenue();
    }

    @GetMapping("venue/{venueId}")
    public Venue getVenueById(@PathVariable Long venueId){
        return venueService.getVenueById(venueId);
    }

    @PutMapping("venue")
    public String updateVenue(@RequestBody Venue venue ){
        return venueService.updateVenue(venue);
    }

    @DeleteMapping("venue/{venueId}")
    public String deleteVenueById(@PathVariable Long venueId){
        return venueService.deleteVenueById(venueId);
    }


    @GetMapping("venue/owner/{ownerId}")
    public List<Venue> getVenueByOwnerId(@PathVariable Long ownerId){
        return venueService.getVenueByOwnerId(ownerId);
    }

    //The below is for the user to search on website based on each category

    @GetMapping("venue/search/category/{categoryId}")
    public List<Venue> searchByCategory(@PathVariable Long categoryId) {
        return venueService.searchByCategory(categoryId);
    }

    @GetMapping("venue/search/location/{location}")
    public List<Venue> searchByLocation(@PathVariable String location) {
        return venueService.searchByLocation(location);
    }

    @GetMapping("venue/search/capacity/{capacity}")
    public List<Venue> searchByCapacity(@PathVariable Integer capacity) {
        return venueService.searchByCapacity(capacity);
    }

    @GetMapping("venue/search/price")
    public List<Venue> searchByPrice(@RequestParam Double min,
                                     @RequestParam Double max) {
        return venueService.searchByPrice(min, max);
    }

}
