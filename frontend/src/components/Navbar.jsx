import React, { act } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useState } from "react";
import Logo from '/logo.png';
import './navbar.scss';

const Navbar = () => {
	const btnRef = React.useRef();
	const [active, setActive] = useState('');

	return (
		<nav className="navbar">
			<div className="nav-container">
				<Link to={"/"}><div className="logo-box"><img className="logo" src={Logo}/><span>Parent Digital Answers</span></div></Link>
				<ul className="nav-pages">
					<div className="page-title-container">
						<li className="page-title" data-item='ABOUT'><Link to={"/"}>ABOUT</Link></li>
						<li className="page-title" data-item='APPS'><Link to={"/facebook"}>APPS</Link></li>
						<li className="page-title" data-item='GAMES'><Link to={"/call-of-duty"}>GAMES</Link></li>
						<li className="page-title" data-item='BLOGS'><Link to={"/"}>BLOGS</Link>
							<ul className="blogs-dropdown">
								<li><a href="#">Youths Now Under 20</a></li>
								<li><a href="#">My Message To Youth Today</a></li>
								<li><a href="#">5 Basics by Julia Schuck</a></li>
								<li><a href="#">Artificial Intelligence by Greg Dodge</a></li>
								<li><a href="#">Perspective</a></li>
								<li><a href="#">Common Sense</a></li>
								<li><a href="#">Habits</a></li>
							</ul>
						</li>
						<li className="page-title" data-item='RESOURCES'><Link to={"/"}>RESOURCES</Link></li>
					</div>
				</ul>
				<ul className="nav-pages social-links">
					<div className="social-container">
						<li className="social"><Link to={"/"}><FacebookIcon /></Link></li>
						<li className="social"><Link to={"/"}><InstagramIcon /></Link></li>
						<li className="social"><Link to={"/"}><YouTubeIcon /></Link></li>
					</div>
				</ul>
				<div className={`hamburger ${active}`} onClick={() => setActive(active == 'active' ? '' : 'active')}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="cross"></span>
					<span className="cross"></span>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;