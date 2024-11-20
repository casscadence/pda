import { useEffect } from "react";
import { Link } from "react-router-dom";
import COD from '/cod.jpg';
import CODB from '/cod2.jpg';
import './styles.scss';

const CallOfDutyPage = () => {

	useEffect(() => {
		document.title = 'PDA - Call Of Duty';
	  }, []);

	return (
		<>
			<div className="call-of-duty-container">
				<h2>VIDEO GAMES</h2>
				<div className="call-of-duty-hero-container">
					<div className="call-of-duty-hero">
						<img className="call-of-duty" src={COD}/>
					</div>
				</div>
				<div className="text-container">
					<div className="text text-full">
						<h3>Call of Duty: Blood, Gore, Language, 18+</h3>
						<h3>“Blood and Gore. Intense Violence, Strong Language, Suggestive Themes, Use of Drugs”</h3>
					</div>
				</div>
				<div className="text-container">
					<div className="text">
						<p className="paragraph">
						Call of Duty, a Violent Game, is Highly Addictive. My son moved back to Tallahassee at 18, extremely addicted to this game. He became involved with tech work and sales, and later school, maybe playing 2 or 3 hours at night. 
						Joel moved 13 months later to Oklahoma for a promised “really good job”. The boss, his online friend, said he could live with him free, since the company paid for a 2 bedroom house for him. 
						The company downsized 6 weeks later. He fell back into his gaming habits, except this time, he went extreme. He played this game and the World of Warcraft, according to Chris, his roommate, “about 75-80 hours over 4 days, before he took his life. 
						A 14 year old kid in Canada, was playing online with him. When Joel said he was depressed about the job situation and girlfriend breakup, this kid encouraged him for almost an hour, to take his life. Remember Joel, you can come back with another life instantly, we do this all the time. (I have the police transcripts) I saw Joel somewhat lose himself in those two games. With no parental influence nor monitoring, he lost himself.  
						</p>
					</div>
					<div className="call-of-duty-image">
						<img src={CODB}/>
					</div>
				</div>
				<div className="text-container">
					<div className="facebook-image facebook-image-alt">
						<img src=""/>
					</div>
					<div className="text text-alt">
						<p>
						</p>
						<p className="second-paragraph">
						</p>
					</div>
				</div>
				<div className="text-container text-container-pair">
					<div className="text text-pair">
						<h2>Basic Gameplay:</h2>
						<ul>
							<li><b>Single-Player Campaign: </b>The single-player campaign offers a story-driven experience where you embark on a military-themed adventure.  Follow the narrative, complete missions, and engage in intense combat scenarios.</li>
							<li><b>Multiplayer Mode: </b>In multiplayer, you compete against other players online or locally.  Players can play various game modes such as Team Deathmatch, Domination, Search and Destroy, and others.  The objective is to score points by eliminating opponents, capturing objectives, or completing specific tasks.</li>
							<li><b>Cooperative Mode: </b>Some Call of Duty games feature cooperative modes where you can team up with friends to complete missions or face off against waves of AI-controlled enemies.</li>
						</ul>
					</div>
					<div className="text text-pair">
						<h2>Controls & Mechanics:</h2>
						<ul>
							<li><b>Movement: </b>They use the WASD keys (or console controller) to move their character.  Familiarize yourself with the controls for actions like sprinting, crouching, and prone positions.</li>
							<li><b>Shooting and Combat: </b>Use the weapons to engage in combat.  Aim down sights, shoot, and reload your weapons.  Each game may have different weapon handling mechanics and recoil patterns, so this game encourages practice to improve their accuracy.</li>
							<li><b>Perks and Loadouts: </b>Players can customize their loadout by selecting weapons, attachments, equipment, and perks.  Perks provide unique abilities or bonuses that can enhance your gameplay.  They can experiment with different loadouts to find a playstyle that suits them.</li>
							<li><b>Scorestreaks and Killstreaks: </b>By earning points through kills, captures, or other achievements, they get to unlock powerful rewards called scorestreaks, or killstreaks.  These can include airstrikes, UAVs, drones, and other supportive or offensive abilities.</li>
						</ul>
					</div>
				</div>
				<div className="text-container text-container-pair">
					<div className="text text-pair">
						<h2>Strategies & Tips:</h2>
						<ul>
							<li><b>Map Awareness: </b>Players should familiarize themselves with the layout of each map. Learn key areas, routes, and potential ambush spots to gain an advantage over your opponents.</li>
							<li><b>Teamwork: </b>Coordinate with your teammates to achieve objectives and secure victories. Communication and cooperation are key to success in team-based game modes.</li>
							<li><b>Objective-Based Gameplay: </b>In game modes like Domination or Search and Destroy, focus on capturing and defending objectives or planting and defusing bombs.  Playing the objective can greatly contribute to your team’s success.</li>
							<li><b>Map Control: </b>Control key areas of the map to gain a tactical advantage.  Use cover effectively, flank your opponents, and utilize sightlines to outmaneuver and outgun them.</li>
							<li><b>Class Roles: </b>In multiplayer, different players can take on specific roles, such as assault, support, or sniper. Experiment with different playstyles and find a role that complements your strengths.</li>
							<li><b>Learn from Experience: </b>Each game offers a progression system that rewards experience and unlocks new weapons, attachments, and abilities. As you play, you’ll gain experience, improve your skills, and unlock new content.</li>
						</ul>
					</div>
					<div className="text text-pair">
						<h2>Newer Series:</h2>
						<ul>
							<li><b>Battle Royale Mode: </b>Games like Call of Duty: Warzone incorporate a massive, last-player-standing battle royale mode where you fight against other players in a shrinking play zone.</li>
							<li><b>Cross-platform Play: </b>Many newer Call of Duty games support cross-platform play, allowing players on different platforms to compete against each other</li>
							<li><b>Operator Abilities: </b>Some games feature unique operator abilities that offer tactical advantages or special abilities for players to utilize during gameplay</li>
						</ul>
					</div>
				</div>
				<div className="text-container">
					<div className="text warning">
						<p>Parents, grandparents, guardians, carefully consider the game’s content, age recommendations, and potential risks before allowing your children to play.  Monitoring and discussing gameplay with your children, setting limits on screen time, and encouraging responsible gaming habits. can help mitigate some of the potential dangers associated with this game.</p>
					</div>
				</div>
				<div className="text-container">
					<div className="text">
						<p className="paragraph">
						</p>
					</div>
					<div className="facebook-image">
						<img src=""/>
					</div>
				</div>
				<div className="text-container">
					<div className="facebook-image facebook-image-alt">
						<img src=""/>
					</div>
					<div className="text text-alt">
						<p>
						</p>
						<p className="second-paragraph">
						</p>
					</div>
				</div>
				<div className="text-container">
					<div className="text">
						<p>
						</p>
					</div>
					<div className="facebook-image">
						<img src=""/>
					</div>
				</div>
			</div>
		</>
	);
};
export default CallOfDutyPage;