describe('Honda', function() {
  it('should inherit from Vehicle.prototype', function() {
    expect(Honda.prototype.toString).toBe(Vehicle.prototype.toString);
  });

  it('should set model when valid model', function() {
    var accord = new Honda('Accord');
    expect(accord.model).toBe('Accord');
  });

  it('should throw an error when invalid model', function() {
    var makeInvalidCar = function() {
      return new Honda('Camry');
    }
    expect(makeInvalidCar).toThrowError(/Camry/);
  });

  it('should list valid models', function() {
    var models = Honda.getModels();
    expect(models.length).toBeDefined();
    expect(models).toContain('Pilot');
  });

  it('should call getPrice when a new car is created', function() {
    spyOn(Honda, 'getPrice');
    var accord = new Honda('Accord');
    expect(Honda.getPrice).toHaveBeenCalled();
    expect(Honda.getPrice).toHaveBeenCalledWith('Accord');
  });

  it('should return a price', function() {
    var civic = 'Civic';
    var crz = 'CR-Z';
    expect(Honda.getPrice(civic)).toBeGreaterThan(0);
    expect(Honda.getPrice(civic)).toBeLessThan(15000);
    expect(Honda.getPrice(civic)).toBeGreaterThan(10000);
  });
});