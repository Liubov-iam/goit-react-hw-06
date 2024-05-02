import ContactList from "./contactList/ContactList";
import SearchBox from "./searchBox/SearchBox";
import ContactForm from "./contactForm/ContactForm";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;