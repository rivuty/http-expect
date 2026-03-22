// oxlint-disable typescript/no-confusing-void-expression

import { describe, expect, it } from 'vitest';

describe('StatusMatchers', () => {
  describe('toHaveOkStatus', () => {
    it('should pass when status is 200', () => {
      const response = new Response('', { status: 200 });
      expect(response).toHaveOkStatus();
    });

    it('should fail when status is not 200', () => {
      const response = new Response('', { status: 404 });
      expect(() => expect(response).toHaveOkStatus()).toThrow('Response has 404 instead of 200 status code');
    });
  });
});
