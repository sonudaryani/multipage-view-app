import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../style/Detail.css';
import buttonLogo from '../images/Group 2934.png';
import pathLogo from '../images/Path.png';



const ItemDetail = () => {
  const { id } = useParams();
  const items = useSelector(state => state.items);
  const item = items.find(item => item.id === parseInt(id, 10));

  let [showDetails, setShowDetails] = useState(true);

  if (!item) {
    return <div className="detail-container">Item not found</div>;
  }

  return (
    <div className="detail-container">
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
        <div className='display-container'>
          <div className='image-container'>
            <img src={item.imgSrc} alt={`Item ${item.id}`} />
            <div className='title-container'>
              <h3>{item.title.slice(0,20)}{item.title.length > 20 ? '...' : ''}</h3>
              <div>
                <span className="material-icons">share</span>
                <span className="material-icons">favorite</span>
              </div>
            </div>
          </div>
          
          <div className='info-container'>
            <div className='button-container'>
              <button onClick={()=> setShowDetails(true)} className="details-btn">details</button>
              <button onClick={()=> setShowDetails(false)} className="userInfo-btn">userInfo</button>
            </div>
            <div className='info'>
                {showDetails ? (
                    <div>
                      <p>{item.body}</p>
                    </div>
                ) : (
                    <div>
                      <p>Post was posted by {item.userId}</p>
                    </div>
              )}
            </div>
          </div>
      </div>
      <div className='more-posts-container'>
        <h1>More Posts</h1>
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
    </div>
  );
};

export default ItemDetail;
