import React from 'react';
import "./Featured.scss";

const Featured = () => {
    return (
        <div className='featured'>
            <div className='container'>
                <div className='left'>
                    <h1>Unlock the ideal <i>freelance</i> services to grow your business</h1>
                    <div className='search'>
                        <div className='searchInput'>
                            <img src='./img/search.png' alt='Search' />
                            <input type='text' placeholder='Try "building a mobile app"' />
                        </div>
                        <button className='searchButton'>Search</button>
                    </div>
                    <div className='popular'>
                        <span>Popular:</span>
                        <div className='popularButtons'>
                            <button>Web Design</button>
                            <button>Wordpress</button>
                            <button>Logo Design</button>
                            <button>AI Services</button>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <img src='./img/man.png' alt='Freelancer' />
                </div>
            </div>
        </div>
    );
};

export default Featured;
