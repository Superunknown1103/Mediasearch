import React from 'react';
// Link allows navigation to different routs in the application.
// IndexLink is the same as Link with the exception of OnlyActiveOnIndexp property set on it.
import { Link, IndexLink } from 'react-router';

const Header = () => (
  <div className= "text-center">
  <nav className= "navbar navbar-default">
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    {" / "}
    <Link to "library" activeClassName="active">Library</Link>
    </nav>
    </div>
  );

export default Header;
