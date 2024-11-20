import { useEffect } from "react";
import { Link } from "react-router-dom";
import FacebookHero from '/facebook.jpg';
import Facebook from '/facebook2.jpg';
import FacebookB from '/facebook3.jpg';
import FacebookC from '/facebook4.jpg';
import './styles.scss';

const FacebookPage = () => {

	useEffect(() => {
		document.title = 'PDA - Facebook';
	  }, []);

	return (
		<>
			<div className="facebook-container">
				<h2>SOCIAL MEDIA APPS</h2>
				<div className="facebook-hero-container">
					<div className="facebook-hero">
						<img className="facebook" src={FacebookHero}/>
					</div>
				</div>
				<div className="text-container">
					<div className="text">
						<p className="paragraph">
							The granddaddy app, most popular among all ages, <b>Facebook has both positive and negative impacts on youth. </b> As of December 2022, <b>Facebook claimed 2.96 billion monthly active users. </b> 
							It allows for easy communication with friends and family,
							while providing a platform for sharing information and creating social connections.
							It’s a useful tool for organizing events and finding communities of people with similar interests.
						</p>
					</div>
					<div className="facebook-image">
						<img src={Facebook}/>
					</div>
				</div>
				<div className="text-container">
					<div className="facebook-image facebook-image-alt">
						<img src={FacebookB}/>
					</div>
					<div className="text text-alt">
						<p>
							However, there are also many dangers associated with Facebook use by youth.
							<b> It can be addictive, leading to excessive screen time and a negative impact on mental health.
							There are concerns about the privacy and security of personal information shared on the platform.
							The potential is there for cyberbullying, online harassment,
							a risk of exposure to inappropriate content and harmful ideologies, such as extremist groups and fake news. </b>
						</p>
						<p className="second-paragraph">
							Moreover, Facebook has been criticized for its role in facilitating political manipulation and mass surveillance.
							There are concerns about the platform’s ability to influence public opinion and spread false information.
							Furthermore, there have been instances of Facebook users becoming victims of identity theft and financial fraud due to hackers gaining access to their personal information.
						</p>
					</div>
				</div>
				<div className="text-container">
					<div className="text">
						<p>
							<b>Overall, Facebook can provide benefits for youth in terms of social connections and information sharing. </b>
							Yet parents, grandparents, and guardians, be aware.
							There are potential risks, and you can take steps to mitigate them.
							Set boundaries on screen time, monitor privacy settings, and educate your children about online safety and responsible social media use.
						</p>
					</div>
					<div className="facebook-image">
						<img src={FacebookC}/>
					</div>
				</div>
			</div>
		</>
	);
};
export default FacebookPage;