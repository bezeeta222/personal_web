import React from 'react';
import { Link } from 'react-scroll';

import './styles/footer.css';

export default function Footer() {
    return (
		<footer>
			<div className="row">
				<div className="twelve columns">
					<ul className="social-links">
						<li>
							<a href='https://github.com/bezeeta222'
								target='_blank' rel='noopener noreferrer'>
								<i className='fab fa-github' />
							</a>
						</li>
						<li>
							<a href='https://wa.link/v2ru6l' title='Telegram'
								target='_blank' rel='noopener noreferrer'>
								<i className='fab fa-whatsapp' />
							</a>
						</li>
					</ul>
					<ul className="copyright">
						<li>&copy; Copyright 2021 Idham</li>
					</ul>
				</div>
				<div id="go-top">
					<Link to="home" smooth={true} title="Back to Top">
						<i className="fa fa-chevron-up" />
					</Link>
				</div>
			</div>
		</footer>
	);
}
