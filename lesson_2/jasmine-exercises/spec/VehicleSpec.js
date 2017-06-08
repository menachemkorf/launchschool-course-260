describe('Vehicle constructor', function() {
  beforeEach(function() {
    this.car = new Vehicle({make: 'Toyota', model: 'Camry'});
  });

  it('should set make and model', function() {
    expect(this.car.make).toBe('Toyota');
    expect(this.car.model).toBe('Camry');
  });

  it('should concatenate make and model', function() {
    expect(this.car.toString()).toBe('Toyota Camry');
    this.car.model = 'Corolla';
    expect(this.car.toString()).toBe('Toyota Corolla');
  });

  it('should beep', function() {
    expect(this.car.honkHorn()).toMatch('beep');
  });
});