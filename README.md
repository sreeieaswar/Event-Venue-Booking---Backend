# Event & Venue Booking Platform – Spring Boot Backend

## Overview

The Event & Venue Booking Platform is a REST API-based backend system for discovering, booking, and managing event venues and services.

The system supports three main roles:

- Customer
- Venue Owner
- Admin

Customers can search for venues, manage their cart, check availability, and create bookings. Venue Owners can manage their venues and view bookings related to their venues. Admins can manage categories and oversee bookings and venue data.

## Technologies Used

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- Maven
- REST APIs
- Postman
- Git & GitHub

## Main Modules

### 1. User Management

Provides APIs for creating and managing users and their roles.

Supported roles include:

- Customer
- Venue Owner
- Admin

### 2. Category Management

Admins can manage event categories such as:

- Birthday
- Wedding
- Corporate
- Photography
- Other event categories

Operations include:

- Create category
- View categories
- View category by ID
- Update category
- Delete category

### 3. Venue Management

Venue Owners can manage their own venues.

Venue information includes:

- Venue name
- Category
- Description
- Image URL
- Price
- Capacity
- Location
- Services offered
- Venue Owner

### 4. Availability Management

The availability module maintains date-wise venue inventory.

It supports:

- Creating availability for a venue
- Viewing availability
- Updating availability
- Deleting availability
- Checking available slots

Booking validation prevents users from booking more slots than are available.

### 5. Venue Search & Filtering

Venues can be searched and filtered using criteria such as:

- Category
- Location
- Date
- Price range
- Capacity

### 6. Cart Management

Customers can manage venue selections in their cart.

Operations include:

- Add venue/date/slot selection
- View cart
- Update cart
- Remove cart item
- Clear cart

### 7. Checkout & Booking

The checkout process validates venue availability before creating a booking.

The booking process:

1. Validates the selected venue and date.
2. Checks available slot quantity.
3. Prevents overbooking.
4. Decrements the available slot quantity.
5. Creates a booking/order record.
6. Assigns the appropriate booking status.

Booking statuses include:

- PENDING
- CONFIRMED
- CANCELLED

### 8. Booking / Order Management

Customers can view their bookings.

Venue Owners can view bookings associated with their venues.

Admins can view and manage all bookings and update booking status where applicable.

## Project Structure

```text
springboot-backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/event_venue_booking/
│   │   │       ├── controller/
│   │   │       ├── entity/
│   │   │       ├── repository/
│   │   │       └── service/
│   │   └── resources/
│   │       └── application.properties
│   └── test/
├── docs/
├── pom.xml
├── mvnw
└── mvnw.cmd
