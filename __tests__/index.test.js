const fs = require('fs');
const stylelint = require('stylelint');

const config = require('../index');
const invalidCss = fs.readFileSync('./__tests__/invalid.css', 'utf-8');
const validCss = fs.readFileSync('./__tests__/valid.css', 'utf-8');

describe('Valid CSS config', () => {
  let result = null;

  beforeEach(async () => {
    result = await stylelint.lint({
      code: validCss,
      config,
    });
  });

  it('does not error if CSS is valid', () => {
    expect(result.errored).toBeFalsy();
  });

  it('raises no warnings if CSS is valid', () => {
    expect(result.results[0].warnings.length).toBe(0);
  });
});

describe('Invalid CSS config', () => {
  let result = null;

  beforeEach(async () => {
    result = await stylelint.lint({
      code: invalidCss,
      config,
    });
  });

  it('throws error if CSS is invalid', () => {
    expect(result.errored).toBeTruthy();
  });

  it('matches snapshot', () => {
    expect(result.results[0].warnings).toMatchSnapshot();
  });
});
