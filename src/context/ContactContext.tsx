"use client";

import React, { createContext, useContext, useState, useMemo } from 'react';

export type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  createdAt: number;
};

type ContactContextType = {
  contacts: Contact[];
  addContact: (contact: Omit<Contact, 'id' | 'createdAt'>) => void;
  updateContact: (id: string, contact: Partial<Omit<Contact, 'id' | 'createdAt'>>) => void;
  deleteContact: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredContacts: Contact[];
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  // Initialize with some dummy contacts so the dashboard isn't empty initially.
  const [contacts, setContacts] = useState<Contact[]>([
    { id: "1", firstName: "Alice", lastName: "Smith", email: "alice@example.com", phoneNumber: "555-0100", createdAt: Date.now() - 100000 },
    { id: "2", firstName: "Bob", lastName: "Johnson", email: "bob@example.com", phoneNumber: "555-0101", createdAt: Date.now() - 50000 },
    { id: "3", firstName: "Charlie", lastName: "Brown", email: "charlie@example.com", phoneNumber: "555-0102", createdAt: Date.now() - 10000 },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const addContact = (contact: Omit<Contact, 'id' | 'createdAt'>) => {
    setContacts(prev => [
      { ...contact, id: Math.random().toString(36).substring(2, 9), createdAt: Date.now() },
      ...prev
    ]);
  };

  const updateContact = (id: string, updatedFields: Partial<Omit<Contact, 'id' | 'createdAt'>>) => {
    setContacts(prev => prev.map(c => (c.id === id ? { ...c, ...updatedFields } : c)));
  };

  const deleteContact = (id: string) => {
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  const filteredContacts = useMemo(() => {
    if (!searchQuery.trim()) return contacts;
    const query = searchQuery.toLowerCase();
    return contacts.filter(c => 
      c.firstName.toLowerCase().includes(query) ||
      c.lastName.toLowerCase().includes(query) ||
      c.email.toLowerCase().includes(query) ||
      c.phoneNumber.includes(query)
    );
  }, [contacts, searchQuery]);

  return (
    <ContactContext.Provider value={{ contacts, addContact, updateContact, deleteContact, searchQuery, setSearchQuery, filteredContacts }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContacts() {
  const context = useContext(ContactContext);
  if (!context) throw new Error("useContacts must be used within ContactProvider");
  return context;
}
