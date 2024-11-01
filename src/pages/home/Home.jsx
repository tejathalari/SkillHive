import React from 'react';
import './Home.scss';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import CatCard from "../../components/catCard/CatCard";
import { cards, projects } from "../../data";
import ProjectCard from '../../components/projectCard/ProjectCard';

const Home = () => {
    return (
        <div className='home'>
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map((card) => (
                    <CatCard key={card.id} item={card} />
                ))}
            </Slide>
            <div className='features'>
    <div className='container'>
        <div className='item'>
            <h2>A Whole World of freelance talent at your fingertips</h2>
            
            <div className='title'>
                <img src='./img/check.png' alt='' />
                Flexible Pricing Options
            </div>
            <p>
                Discover services tailored to your budget, with transparent, project-based pricing and no hidden fees.
            </p>
            
            <div className='title'>
                <img src='./img/check.png' alt='' />
                Quality Assured
            </div>
            <p>
                Connect with vetted professionals committed to delivering top-notch quality, no matter the scope.
            </p>
            
            <div className='title'>
                <img src='./img/check.png' alt='' />
                Wide Range of Skills
            </div>
            <p>
                From web design to AI, find experts in every field who can bring your vision to life.
            </p>
            
            <div className='title'>
                <img src='./img/check.png' alt='' />
                Hassle-Free Collaboration
            </div>
            <p>
                Enjoy seamless collaboration with easy-to-use communication tools to stay aligned with freelancers.
            </p>
        </div>
        <div className='item'>
            <video src='./img/video1.mp4' controls></video>
        </div>
    </div>
</div>

            <div className='features dark'>
                <div className='container'>
                    <div className='item'>
                        <h2>
                         SkillHive <i>business</i>
                        </h2>
                        <h2>A business solution designed for teams</h2>
                        <p>
                        Upgrade to a curated experience packed with tools and benefits,
                        dedicated to businesses
                        </p>
                        <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button className="button">Explore SkillHive Business</button>
                    </div>
                    <div className='item'>
    <img className="business-image" src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png' alt='' />
</div>

                </div>
            </div>
            <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
        </div>
    );
};

export default Home;
