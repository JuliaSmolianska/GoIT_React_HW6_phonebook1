import { ContactForm } from './ContactForm';
import { SearchFilter } from './SearchFilter';
import { ContactList } from './ContactList';
import css from './App.module.css';

export function App() {
  return (
    <div className={css.box}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <SearchFilter />
      <ContactList />
    </div>
  );
}
