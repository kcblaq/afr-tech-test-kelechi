"use client";

import { RiDashboardLine, RiUser3Line, RiDeleteBinLine } from "@remixicon/react";
import { useContacts } from "@/context/ContactContext";
import { EditContactDialog } from "@/components/EditContactDialog";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { filteredContacts, deleteContact } = useContacts();

  return (
    <section className="w-full py-24 md:py-32 bg-muted/30 border-b min-h-[80vh] flex items-center justify-center">
      <div className="container px-4 md:px-6 mx-auto text-center space-y-12">
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-4">
            <RiDashboardLine className="size-6 text-primary" />
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Registered Contacts
          </h2>
          <p className="text-muted-foreground text-lg">
            Manage your registered users. Use the search bar in the navigation to filter contacts.
          </p>
        </div>

        {/* Contacts List */}
        <div className="mx-auto max-w-5xl rounded-xl border bg-background shadow-xl overflow-hidden text-left">
          <div className="h-12 border-b bg-muted/50 flex items-center px-4 gap-2">
            <div className="size-3 rounded-full bg-red-400" />
            <div className="size-3 rounded-full bg-amber-400" />
            <div className="size-3 rounded-full bg-green-400" />
            <span className="ml-4 text-sm font-medium text-muted-foreground">Contacts Database ({filteredContacts.length})</span>
          </div>
          <div className="p-0">
            {filteredContacts.length === 0 ? (
              <div className="p-12 text-center text-muted-foreground">
                <RiUser3Line className="mx-auto size-12 opacity-50 mb-4" />
                <p>No contacts found matching your search.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/30">
                      <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Name</th>
                      <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Email</th>
                      <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Phone Number</th>
                      <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Registered On</th>
                      <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredContacts.map((contact) => (
                      <tr key={contact.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle font-medium">{contact.firstName} {contact.lastName}</td>
                        <td className="p-4 align-middle text-muted-foreground">{contact.email}</td>
                        <td className="p-4 align-middle text-muted-foreground">{contact.phoneNumber}</td>
                        <td className="p-4 align-middle text-muted-foreground">
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-4 align-middle text-right">
                          <div className="flex items-center justify-end gap-2">
                            <EditContactDialog contact={contact} />
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 text-muted-foreground hover:text-destructive"
                              onClick={() => {
                                if (window.confirm("Are you sure you want to delete this contact?")) {
                                  deleteContact(contact.id);
                                }
                              }}
                            >
                              <RiDeleteBinLine className="size-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
