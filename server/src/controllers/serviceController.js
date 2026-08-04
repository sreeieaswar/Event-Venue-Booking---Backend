const Service = require("../models/Service");

async function listServices(req, res, next) {
  try {
    const filter = {};
    if (req.query.search) filter.$text = { $search: req.query.search };
    if (req.query.category) filter.category = req.query.category;
    const services = await Service.find(filter).populate("category owner", "name email slug").sort("-createdAt");
    return res.json(services);
  } catch (error) {
    return next(error);
  }
}

async function createService(req, res, next) {
  try {
    const service = await Service.create({ ...req.body, owner: req.user._id });
    return res.status(201).json(service);
  } catch (error) {
    return next(error);
  }
}

async function updateService(req, res, next) {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    if (req.user.role !== "admin" && String(service.owner) !== String(req.user._id)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    Object.assign(service, req.body);
    await service.save();
    return res.json(service);
  } catch (error) {
    return next(error);
  }
}

async function deleteService(req, res, next) {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    if (req.user.role !== "admin" && String(service.owner) !== String(req.user._id)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    await service.deleteOne();
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
}

module.exports = { listServices, createService, updateService, deleteService };

