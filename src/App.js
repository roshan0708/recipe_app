import React from 'react';
import './App.css';
import Cover from "./components/Cover/cover.component";
import Navbar from "./components/Navbar/navbar.component";
import SearchCard from "./components/Search-Card/search-card.component";
import Footer from "./components/Footer/footer.component";

const App = () => {

  return (
    <div className="App">
      <Navbar/>
      <Cover/>
      <SearchCard/>
      <Footer />
    </div>
  );
}

export default App;
