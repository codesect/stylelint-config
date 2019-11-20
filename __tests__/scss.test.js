const fs = require('fs');
const stylelint = require('stylelint');

const config = require('../scss');
const invalidScss = fs.readFileSync('./__tests__/invalid.scss', 'utf-8');
const validScss = fs.readFileSync('./__tests__/valid.scss', 'utf-8');

describe('Valid CSS config', () => {
  let result = null;

  beforeEach(async () => {
    result = await stylelint.lint({
      code: validScss,
      config,
      syntax: 'scss',
    });
  });

  it('does not error if CSS is valid', () => {
    expect(result.errored).toBeFalsy();
  });

  it('raises no warnings if CSS is valid', () => {
    expect(result.results[0].warnings.length).toBe(0);
  });
});

describe('Invalid SCSS config', () => {
  let result = null;

  beforeEach(async () => {
    result = await stylelint.lint({
      code: invalidScss,
      config,
      syntax: 'scss',
    });
  });

  it('throws error if SCSS is invalid', () => {
    expect(result.errored).toBeTruthy();
  });

  it('matches snapshot', () => {
    expect(result.results[0].warnings).toMatchSnapshot();
  });
});
