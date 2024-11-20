import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Password from '/password.png';
import Phone from '/phone.png';
import Monitor from '/monitor.png';
import Location from '/location.png';
import Love from '/love.png';
import Hero3 from '/hero3.jpg';
import './styles.scss';

const HomePage = () => {

	const [imgURL, setImgURL] = useState(1);

	useEffect(() => {
		document.title = 'PDA: Parent Digital Answers';
	  }, []);

	  useEffect(() => {
		setTimeout(() => {
			setImgURL(imgURL < 9 ? imgURL + 1 : 1)
		}, 5000);		  
	  }, [imgURL]);

	return (
		<>
			<div className="home-header-container">
				<div className="home-header">
					<div className="carousel">
						<div className="overlay"></div>
						<img key={imgURL} className="carousel-hero" src={`/hero${imgURL}.jpg`} />
{/* 						<ul className="loader">
							<li className={imgURL == 1 ? 'active' : ''}></li>
							<li className={imgURL == 2 ? 'active' : ''}></li>
							<li className={imgURL == 3 ? 'active' : ''}></li>
							<li className={imgURL == 4 ? 'active' : ''}></li>
							<li className={imgURL == 5 ? 'active' : ''}></li>
							<li className={imgURL == 6 ? 'active' : ''}></li>
							<li className={imgURL == 7 ? 'active' : ''}></li>
							<li className={imgURL == 8 ? 'active' : ''}></li>
							<li className={imgURL == 9 ? 'active' : ''}></li>
							<li className="loader-bar"></li>
						</ul> */}
					</div>
					<h2>Your Children In The Digital World</h2>
					<h3>Your Children’s World 501(c)3 is committed to providing FREE resources to Parents, Grandparents, and Guardians of today’s Youth regarding the dangers of Social Media Apps and Online Video Games. This site contains easily understandable Ratings Charts, Parental Controls for various gaming consoles, parenting guidelines, and links to Mental Health Professionals. </h3>
					<div className="video-container">
						<a href="https://youtu.be/B2qTa3Uc2UA?si=6y9EGL1Km2fys1Sh">
							<svg width="100" height="100" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle className="outer_circle" cx="65.5" cy="65.5" r="40" stroke="white"></circle>
								<path className="play" fillRule="evenodd" clipRule="evenodd" d="M60 76V57L77 66.7774L60 76Z" fill="white"></path>
							</svg>
							<span>Watch Video</span>
						</a>
					</div>
					<div className="btn-container">
						<div className="brochure-btn"><a href="">DIGITAL BROCHURE</a></div>
						<div className="ratings-btn"><a href="">APP & GAME RATINGS</a></div>
					</div>
				</div>
			</div>
{/* 			<div className="guidelines-container">
					<h2>Here are 5 essential guidelines to help your children navigate their Virtual World:</h2>
					<h3>(while promoting safety and healthy relationships)</h3>
					<div className="categories">
						<div className="password">
							<img src={Password} />
							<h4>PASSWORDS</h4>
							<p><b>ALWAYS KNOW THEIR PASSWORDS</b> on all of their digital hardware, including cell phones, laptops, iPads, desktops.</p>
						</div>
						<div className="phone">
							<img src={Phone} />
							<h4>PHONES</h4>
							<p><b>ALWAYS KEEP PHONES AT NIGHT</b>, along with all other digital devices when they go to bed. They will be there in the morning.</p>
						</div>
						<div className="monitor">
							<img src={Monitor} />
							<h4>MEDIA</h4>
							<p><b>LEARN HOW TO MONITOR</b> their search histories, social media, and the online video games they play.</p>
						</div>
						<div className="location">
							<img src={Location} />
							<h4>LOCATION</h4>
							<p><b>CONSIDER TRACKING APPS</b> and GPS locators for your children's phones and all other digital devices. Consider thoughtfully.</p>
						</div>
						<div className="love">
							<img src={Love} />
							<h4>LOVE</h4>
							<p><b>LOVE YOUR CHILDREN ALWAYS</b> listen to them, care for their NEEDS. Yet it is not about being their buddy, nor giving into their every desire.</p>
						</div>
					</div>
					<p className="guidelines-readmore">These parenting actions help you regain control and can bring normalcy into Your Children’s Digital World. Challenging, yes, perhaps with intense discussions, give and take. Professional help is a phone call or email away, providing guidance and wisdom for you and your children in this Virtual World.</p>
					<a className="readmore" href="">Read More</a>
			</div> */}
		</>
	);
};
export default HomePage;
