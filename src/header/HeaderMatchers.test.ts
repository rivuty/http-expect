import { describe, expect, it } from 'vitest';

describe('HeaderMatchers', () => {
  describe('toHaveHeader', () => {
    it('passes when the header exists', () => {
      expect({ headers: new Headers({ 'content-type': 'application/json' }) }).toHaveHeader('content-type');
    });

    it('fails when the header does not exist', () => {
      expect(() =>
        expect({ headers: new Headers({ 'content-type': 'application/json' }) }).toHaveHeader('authorization'),
      ).toThrow('Response does not have "authorization" header');
    });

    it('passes negated when the header does not exist', () => {
      expect({ headers: new Headers() }).not.toHaveHeader('content-type');
    });

    it('fails negated when the header exists', () => {
      expect(() =>
        expect({ headers: new Headers({ 'content-type': 'application/json' }) }).not.toHaveHeader('content-type'),
      ).toThrow('Response has not expected "content-type" header');
    });
  });
});
