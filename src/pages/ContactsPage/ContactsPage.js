import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Container from '../../../node_modules/react-bootstrap/Container';
import './ContactsPage.css';

export default function ContactsPage() {
  return (
    <Container className="contacts-page d-grid h-100">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
