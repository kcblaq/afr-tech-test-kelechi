import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { ContactProvider, useContacts } from '@/context/ContactContext';
import React from 'react';

// Wrapper to provide context to the hook
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <ContactProvider>{children}</ContactProvider>
);

describe('CRUD Logic (ContactContext)', () => {
  it('should initialize with 3 dummy contacts', () => {
    const { result } = renderHook(() => useContacts(), { wrapper });
    expect(result.current.contacts.length).toBe(3);
  });

  it('should ADD a new contact', () => {
    const { result } = renderHook(() => useContacts(), { wrapper });

    act(() => {
      result.current.addContact({
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        phoneNumber: '0987654321',
      });
    });

    expect(result.current.contacts.length).toBe(4);
    const newContact = result.current.contacts[0]; // added to the front
    expect(newContact.firstName).toBe('Jane');
    expect(newContact.email).toBe('jane@example.com');
  });

  it('should UPDATE an existing contact', () => {
    const { result } = renderHook(() => useContacts(), { wrapper });
    
    const contactToEdit = result.current.contacts[0];

    act(() => {
      result.current.updateContact(contactToEdit.id, {
        firstName: 'UpdatedName',
      });
    });

    const updatedContact = result.current.contacts.find(c => c.id === contactToEdit.id);
    expect(updatedContact?.firstName).toBe('UpdatedName');
    expect(updatedContact?.lastName).toBe(contactToEdit.lastName); // untouched
  });

  it('should DELETE a contact', () => {
    const { result } = renderHook(() => useContacts(), { wrapper });
    
    const contactToDelete = result.current.contacts[0];

    act(() => {
      result.current.deleteContact(contactToDelete.id);
    });

    expect(result.current.contacts.length).toBe(2);
    expect(result.current.contacts.find(c => c.id === contactToDelete.id)).toBeUndefined();
  });

  it('should filter contacts based on search query', () => {
    const { result } = renderHook(() => useContacts(), { wrapper });

    // Initial state: 3 dummy contacts
    expect(result.current.filteredContacts.length).toBe(3);

    act(() => {
      // "Alice" is one of the dummy contacts
      result.current.setSearchQuery('Alice');
    });

    expect(result.current.filteredContacts.length).toBe(1);
    expect(result.current.filteredContacts[0].firstName).toBe('Alice');
  });
});
