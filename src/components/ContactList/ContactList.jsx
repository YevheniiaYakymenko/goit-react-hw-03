import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDeleteContact}
        />
      ))}
    </ul>
  );
}
