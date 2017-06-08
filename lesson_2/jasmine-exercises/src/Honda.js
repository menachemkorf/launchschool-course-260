function Honda(model) {
  this.verify(model);
  this.make = 'Honda';
  this.model = model;
  this.price = Honda.getPrice(model);
}

Honda.prototype = Object.create(Vehicle.prototype);
Honda.prototype.constructor = Honda;

Honda.prototype.verify = function(model) {
  if (Honda.getModels().indexOf(model) === -1) {
    throw new Error('Model ' + model + ' does not exist');
  }
};

Honda.getPrice = function(model) {
  var prices = [16500, 14500, 21000, 15800, 12000, 13100, 16000, 18100, 22500, 19300];
  return prices[Honda.getModels().indexOf(model)];
};

Honda.getModels = function() {
  return ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"];
}