# DSS Event Booking Platform

A MERN application for discovering and booking event venues and related services for birthdays, weddings, corporate meetings, photography, and more.

## Roles

- Customer: browse venues/services, manage cart, checkout, view orders/bookings.
- Venue Owner: manage own venues, services, inventory/availability, and booking orders.
- Admin: manage users, categories, all venues/services, and all orders.

## Project Structure

```text
dss_event_booking/
  client/                 React frontend
  server/                 Node.js + Express + MongoDB backend
  docs/                   API and deployment notes
  .env.example            Root-level environment reference
```

## Quick Start

```bash
cd server
npm install
cp .env.example .env
npm run dev

cd ../client
npm install
npm run dev
```

## Core Features

- Login/signup with JWT authentication
- Customer, venue owner, and admin roles
- Venue, service, and category management
- Inventory quantity and availability management
- Cart and checkout flow
- Booking/order management
- Search and filtering
- Responsive React UI
- REST API structure
- Git workflow and deployment documentation

