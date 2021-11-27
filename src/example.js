import React from "react";
import "./frontPgButtons.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import InfoButton from "./Components/InfoButton";
import HomeButton from "./Components/HomeButton";
import FavButton from "./Components/FavButton";
import FrontPageButtons from "./Components/FrontPgButtons";
import Header from './Assets/Header.png';
import Rubrik1 from './Assets/Rubrik1.png';
import Rubrik2 from './Assets/Rubrik2.png';
import FrontPage from "./Pages/frontPage";



// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  
  return (
    <Router>
      <div className="Screen">
      
        <div className="MenuBarContainer" role="group">
        
            <Link to="/InfoPage"><InfoButton></InfoButton></Link>
          
          
            <Link to="/HomePage"><HomeButton></HomeButton></Link>
          
          
            <Link to="/FavouritesPage"><FavButton></FavButton></Link>
          
            
         
        </div>
        
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        
        <Routes>
        <Route path='/InfoPage' element={"Info Page"} />
          <Route path='/HomePage' element={"Home Page"} />
          <Route path='/FavouritesPage' element={"Favourites"} />
        </Routes>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
