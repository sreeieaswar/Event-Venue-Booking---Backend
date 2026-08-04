# REST API Map

Base URL: `/api`

## Auth

- `POST /auth/signup`
- `POST /auth/login`
- `GET /auth/me`

## Users

- `GET /users` admin only
- `GET /users/:id` admin or self
- `PATCH /users/:id/role` admin only

## Categories

- `GET /categories`
- `POST /categories` admin only
- `PUT /categories/:id` admin only
- `DELETE /categories/:id` admin only

## Venues

- `GET /venues`
- `GET /venues/:id`
- `POST /venues` venue owner or admin
- `PUT /venues/:id` owner of venue or admin
- `DELETE /venues/:id` owner of venue or admin

## Services

- `GET /services`
- `POST /services` venue owner or admin
- `PUT /services/:id` owner or admin
- `DELETE /services/:id` owner or admin

## Cart

- `GET /cart`
- `POST /cart/items`
- `PATCH /cart/items/:itemId`
- `DELETE /cart/items/:itemId`
- `DELETE /cart`

## Orders

- `POST /orders/checkout`
- `GET /orders/my`
- `GET /orders` admin or venue owner
- `GET /orders/:id`
- `PATCH /orders/:id/status` admin or venue owner

