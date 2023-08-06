import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../redux/action';
import { Link } from 'react-router-dom';
import '../style/Home.css';
import buttonLogo from '../images/Group 2934.png';
import pathLogo from '../images/Path.png';

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="home-container">
      <nav>
        <h1 className="logo">TravelMedia.in</h1>
        <div className="toggle-menu">
          <span className="material-icons">home</span>
          <span className="material-icons">notifications</span>
          <img className='pathLogo' src={pathLogo} alt="pathLogo" />
          <span className="material-icons">person</span>
        </div>
      </nav>
      <div className='section-container'>
          <h1 className="home-title">Social Media For Travellers</h1>
          <div className='search-container'>
            <input type='text' placeholder='Search' />
          </div>
          <ul className="item-list">
        {items.map(item => (
          <li key={item.id} className="item-card">
            <Link to={`/item/${item.id}`}>
            <img className='postImg' src={item.imgSrc} alt={`Item ${item.id}`} />
                    <div className="item-info">
                      <div>
                          <h2 className="item-title">{item.title}</h2>
                          <p className="item-description">
                              {item.body.slice(0, 100)}{item.body.length > 100 ? '...' : ''}
                              <a className="read-more">Read More...</a>
                          </p>
                      </div>
                      <div>
                        <img src={buttonLogo} alt="buttonLogo" />
                      </div>
                  </div>
              
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Home;
