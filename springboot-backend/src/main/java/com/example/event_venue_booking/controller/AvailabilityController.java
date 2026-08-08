package com.example.event_venue_booking.controller;

import com.example.event_venue_booking.entity.Availability;
import com.example.event_venue_booking.entity.Venue;
import com.example.event_venue_booking.service.AvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AvailabilityController {

 @Autowired
 AvailabilityService availabilityService;

 @PostMapping("availability")
 public String addAvailability(@RequestBody Availability availability){
     return availabilityService.addAvailability(availability);
 }

 @GetMapping("availability")
 public List<Availability> getAvailabilities(){
  return availabilityService.getAvailabilities();
 }

 @GetMapping("availability/{availabilityId}")
 public Availability getAvailabilityById(@PathVariable Long availabilityId){
  return availabilityService.getAvailabilityById(availabilityId);
 }

 @PutMapping("availability")
 public String updateAvailability(@RequestBody Availability availability ){
  return availabilityService.updateAvailability(availability);
 }

 @DeleteMapping("availability/{availabilityId}")
 public String deleteAvailabilityById(@PathVariable Long availabilityId){
  return availabilityService.deleteAvailabilityById(availabilityId);
 }
}

