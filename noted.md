## Jasmine

Major components:
- suites
  - A suit begins with the `describe` function call, passing in two arguments, a string with a description, and a callback function.
- spec
  - A spec begins with the `it` function call, passing in two arguments, a string with a description, and a callback function.
- expectations
  - `expect(true).toBe(true);`
  - | expect | (true) | .toBe    | (true)   |
    |:------:|:------:|:--------:|:--------:|
    |        | actual | matcher  | expected |
