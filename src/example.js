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
import FrontPage from "./Pages/frontPage";
import InfoPage from "./Pages/infoPage";
import FavPage from "./Pages/favPage";


//Essentially the MenuBar component

export default function BasicExample() {
  
  return (
    <Router>
      <div className="Screen">
      
        <div className="MenuBarContainer" role="group">
        
            <Link to="/InfoPage"><InfoButton/></Link>
          
          
            <Link to="/HomePage"><HomeButton/></Link>
          
          
            <Link to="/FavouritesPage"><FavButton/></Link>
          
            
         
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
        <Route path='/InfoPage' element={InfoPage} />
          <Route path='/HomePage' element = {<FrontPage/>}/> 
          <Route path='/FavouritesPage' element={<FavPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
