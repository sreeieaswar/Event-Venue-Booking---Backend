const Venue = require("../models/Venue");

function buildVenueQuery(query) {
  const filter = {};
  if (query.search) filter.$text = { $search: query.search };
  if (query.category) filter.category = query.category;
  if (query.city) filter["address.city"] = new RegExp(query.city, "i");
  if (query.minPrice || query.maxPrice) {
    filter.pricePerDay = {};
    if (query.minPrice) filter.pricePerDay.$gte = Number(query.minPrice);
    if (query.maxPrice) filter.pricePerDay.$lte = Number(query.maxPrice);
  }
  if (query.capacity) filter.capacity = { $gte: Number(query.capacity) };
  return filter;
}

async function listVenues(req, res, next) {
  try {
    const venues = await Venue.find(buildVenueQuery(req.query))
      .populate("category", "name slug")
      .populate("owner", "name email")
      .sort("-createdAt");
    return res.json(venues);
  } catch (error) {
    return next(error);
  }
}

async function getVenue(req, res, next) {
  try {
    const venue = await Venue.findById(req.params.id).populate("category owner", "name email slug");
    if (!venue) return res.status(404).json({ message: "Venue not found" });
    return res.json(venue);
  } catch (error) {
    return next(error);
  }
}

async function createVenue(req, res, next) {
  try {
    const venue = await Venue.create({ ...req.body, owner: req.user._id });
    return res.status(201).json(venue);
  } catch (error) {
    return next(error);
  }
}

async function updateVenue(req, res, next) {
  try {
    const venue = await Venue.findById(req.params.id);
    if (!venue) return res.status(404).json({ message: "Venue not found" });
    if (req.user.role !== "admin" && String(venue.owner) !== String(req.user._id)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    Object.assign(venue, req.body);
    await venue.save();
    return res.json(venue);
  } catch (error) {
    return next(error);
  }
}

async function deleteVenue(req, res, next) {
  try {
    const venue = await Venue.findById(req.params.id);
    if (!venue) return res.status(404).json({ message: "Venue not found" });
    if (req.user.role !== "admin" && String(venue.owner) !== String(req.user._id)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    await venue.deleteOne();
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
}

module.exports = { listVenues, getVenue, createVenue, updateVenue, deleteVenue };

