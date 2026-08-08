package com.example.event_venue_booking.service;

import com.example.event_venue_booking.entity.Availability;
import com.example.event_venue_booking.entity.Venue;
import com.example.event_venue_booking.repository.AvailabilityRepository;
import com.example.event_venue_booking.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvailabilityService {

    @Autowired
    AvailabilityRepository availabilityRepository;

    @Autowired
    VenueRepository venueRepository;


    public String addAvailability(Availability availability) {
        Long venueId=availability.getVenue().getVenueId();
        Venue venue=venueRepository.findById(venueId).orElse(null);

        if(venue==null){
            return "NO VENUE FOUND!!!";
        }else{
            availabilityRepository.save(availability);
        }
        return "AVAILABILITY ADDED SUCCESSFULLY!!";
    }

    public List<Availability> getAvailabilities() {
      return availabilityRepository.findAll();
    }


    public Availability getAvailabilityById(Long availabilityId) {
        return availabilityRepository.findById(availabilityId).orElse(null);
    }


    public String updateAvailability(Availability availability) {
        if(!availabilityRepository.existsById(availability.getAvailabilityId())){
            return "NO ID FOUND!!";
        }else{
            availabilityRepository.save(availability);
        }
        return "UPDATION COMPLETED SUCCESSFULLY!!!";
    }

    public String deleteAvailabilityById(Long availabilityId) {
        if(!availabilityRepository.existsById(availabilityId)){
            return "NO ID FOUND FOR DELETION";
        }else{
            availabilityRepository.deleteById(availabilityId);
        }
        return "DELETION SUCCESSFULL!!!";
    }
}
