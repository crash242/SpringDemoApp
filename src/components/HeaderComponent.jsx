import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // do something with the search query?
    console.log(searchQuery);
  };

  const handleGoSearch = () => {
    console.log("Search String: " + searchQuery);
    navigate("/");
    // navigate(`/search?query=${searchQuery}`)
  }

  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div><a href='/' className='navbar-brand'>Employee App</a></div>
            <div><a href='/add-employee' className='navbar-brand'>Add</a></div>
            <div>
                <form className='form-inline my-2 my-lg-0' onSubmit={handleSearch}>
                <input
                    className='form-control mr-sm-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                    value={searchQuery}
                    onChange={handleSearchChange}
                />              
                </form>            
            </div>
            <button className='btn btn-outline-success my-2 my-sm-0' type='submit' onClick={handleGoSearch}>
             Go
            </button>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
