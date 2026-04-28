import { describe, it, expect } from 'vitest';
import { formSchema } from '@/components/RegisterForm';

describe('Form Validation (Zod Schema)', () => {
  it('should pass with valid data', () => {
    const validData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890',
    };

    const result = formSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should fail when first name is less than 2 characters', () => {
    const invalidData = {
      firstName: 'J',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890',
    };

    const result = formSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('First name must be at least 2 characters.');
    }
  });

  it('should fail when email is invalid', () => {
    const invalidData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'invalid-email',
      phoneNumber: '1234567890',
    };

    const result = formSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Please enter a valid email address.');
    }
  });

  it('should fail when phone number is less than 10 characters', () => {
    const invalidData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '12345',
    };

    const result = formSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Please enter a valid phone number.');
    }
  });
});
