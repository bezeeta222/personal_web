import React from 'react';
import Typography from '@mui/material/Typography';

import './styles/portfolio.css';

const projects = [
    {
        title: 'Intro page',
        category: 'Interactive globe for displaying terrestrial research stations',
        url: 'https://github.com/bezeeta222/projek_luna_owner',
        image: '/images/globe.png',
    },
];

export default function Portfolio() {
	return (
        <section id="portfolio">
			<div className="row">
				<div className="twelve columns collapsed">
					<h1>My works and pet-projects</h1>
                    <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                		{projects.map(project => {
                            return (
                                <div key={project.title} className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href={project.url} title={project.title}>
                                            <img alt={projects.title} src={project.image} />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>{project.title}</h5>
                                                    <p>{project.category}</p>
                                                </div>
                                            </div>
                                            <div className="link-icon">
                                                <i className="fa fa-link"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
					</div>
          		</div>
		  	</div>
   		</section>
    );
}
