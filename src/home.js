import React, { useEffect, useState, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { connectM } from "./redux/blockchain/blockchainActions";
import { fetchDataM } from "./redux/data/dataActions";
import "./image/hero.gif";
import "./styles/home.css";
import "./styles/queries.css";
import { Image } from "./data";
import Faq from "react-faq-component";
import homeGif from './image/maingif.gif';

const joindiscord = () => {
  setUnstaking(true);
};

const home = () => {
  const toggle = document.getElementById("toggle");
  const nav = document.getElementById("nav-wrap");

  if (toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("displaynav");
    });
  }

  const [rows, setRowsOption] = useState(null);
  const faqdata = {
    title: "",
    rows: [
      {
        title: "What is NFT?",
        content: `NFT stands for “Non-fungible token” and is a cool way of saying it’s a truly unique digital item that YOU can buy, own, and trade.`,
      },
      {
        title: "When is the Launch?",
        content: "22nd February 2022, 12:00 EST.",
      },
      {
        title: "How can I purchase Dogface Army NFTs?",
        content: `You can purchase DogFace Army <a href="#/mint">Here</a> . `,
      },
      {
        title: "How do I learn more about Dogface Army?",
        content: `Go to the community on <a href="https://discord.gg/TEYKDKCS4D">Discord</a> .`,
      },
      {
        title: "What is a dao ?",
        content: `Member-owned communities without centralized leadership.
        A safe way to collaborate with internet strangers.
        A safe place to commit funds to a specific cause.`,
      },
      {
        title: "What is dogface army ?",
        content: `The Dogface Army is member-owned place without centralized leadership where Dogface Army Staking NFT Holders can commit funds to the Dogface Army fund.`,
      },
      {
        title: "Is there a whitepaper for the Dogface collection ?",
        content: `The whitepaper can be found on the founders substack. DFA Whitepaper`,
      },
    ],
  };

  return (
		<div className="homeContainer">
			<section className="headerbanner">
				<div className="Headertext">
					<p
						className="heading"
						id="heading"
						style={{
							fontFamily: 'Boston,cursive',
						}}
					>
						The Investor Club for Serious Investors
					</p>
				</div>
			</section>
			<div className="hero">{/* mint section */}</div>

			<section
				style={{
					backgroundColor: 'black',
					color: 'white',
					width: '100%',
					display: 'flex',
					lineHeight: 1.5,
					justifyContent: 'center',
					alignItems: 'center',
					// fontFamily: 'Open-Sans'
				}}
			>
				<div>
					<img src={homeGif} alt="loading..." height={300} />
					<div
						style={{
							marginLeft: '50px',
							fontWeight: 'bold',
							fontSize: '20px',
						}}
					>
						<p>PRESALE - SOLD OUT </p>
						<p>WHITE LIST - 0.08 ETH </p>
						<p>PUBLIC - 0.1 ETH</p> <br></br>
						<a
							style={{
								marginLeft: '-10px',
								fontSize: '30px',
								color: 'white',
								fontFamily: 'Boston, cursive',
							}}
							href="https://opensea.io/collection/dogfacearmynft"
							target="_blank"
						>
							Buy on OpenSea
						</a>
					</div>
				</div>
			</section>

			{/* <div className="hero">
				<div className="herotext">
					<div className="text">
						<p>
							<img
								style={{ marginRight: 15, verticalAlign: 'bottom' }}
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJESURBVHgBxZYxT9tAFMff2QrqeOrQBqYbq6pQszGlcQVSxvQTlHyCdq1ohSsatRv9BoWxE2XsgGy2jqFIiPFGiBiODSlyzDs7tojxhbNjm/9yd+9Od788v/fyCEzEfqx8AD9wcCoA/Hd862wANYmEAP3lTRx+3bFLELsuEGMybqfsFMB0Wf+lBTVC0Iy92kAiiDH0IAik6wU8AghJG9i3lY9Agt2UudIYIVnGjECtFMTIMvKt0z0ceimz/DQHUIEM1YYCxIM6ITJBRubXeMqcFwxKEtE5xHaWuyHUl9M/4br/GuNl3IXRaJU75xzmlBbEFFAEsDlZcgSx5wXJBZECgLJAtCEUAKWAGDqHmGNheo7bs45Ao+EWDVYtCO4MBBimLacwE2ThIALOp3wx8d1iMPbd8EH1lQMYGXYIriktT8Tinwb8YY8EFjT8Xcih3CkqpecR2MNi1wMNmVBA4uhC0I2lQ/z7l0VMFQMW3Wji2cvjh+4rBKENEkBbB6QwRALSWtrHWzq4bIIKZL15jSD/oAqIEMS7uKGtxd9gBIsYYaoOrEPtZ8fCHfKszUKBqRLbeeWAQbYV28qmaG5PTL3iDj38xQQIaWdsP8GK0KGtp4fCuxKVQSQgb5vX6OO16OEpUTDNrowj+RljY65ipSv++f9PLGqrkF3UGCz4U21i6Z6IlaSwrKD3ixqj68+pOBr+rRQiBsGH9hVxsoapyzF1T0rNjllSlHohW8TaIBKYKI3fJzAEvNohQpDIK21slN5gRT25BVqL8eB1JrD8AAAAAElFTkSuQmCC"
								alt=""
							/>
							Chris Wagstaff is an Army Veteran with an Operational Tour under
							his belt. He is a qualified teacher, fitness coach and self taught
							artist. He has self published a 70,000 word fantasy novel and
							draws for 7-10 hours daily. His goal is to become a full time NFT
							artist, comic creator and author.
						</p>
						<p>
							<img
								style={{ marginRight: 15, verticalAlign: 'bottom' }}
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcCAYAAACUJBTQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFCSURBVHgB7ZWxTsMwEIbv7CAxdmP1iBCgvkEr8QLhTVhRVXBVoT4Ca54E6BNgAersrkx5AFJzdipom1ax07hTPylOYp/963znM8ISMb7sA0MBjSmUHszUthEUk3MBi5NXqwP7wlDq+49RpRt+krtWBCwLI8XTRbcqgtiBNilgi0gEbAhWPYoiQjHuA/B3Mbl+jCfyJ1bGqH0R5PnaP8WIAg9v0B45FLxyVpgefGbk1sgZ7IMxita51VLpzaHENnr4JeklIRJxA78kCTEuc593PUx7jURczlNKQigclNd2OQ+aCFBC2crs6cnaFmX0TOvnUOkflqU/KCbl3GKqH2ZZyJSDZBevMxDjq5SqwjN9nroOxtLOzdk8f/lW4Em9JwgptZt3Tg8COMh2HUWOIjswRlc7cQ4BoI+RO5Ds/6y42zSAX1TRXMTFmEPvAAAAAElFTkSuQmCC"
								alt=""
							/>
							Every single Dogface Soldier and army trait has been hand-drawn
							with immaculate attention to detail. All of the art is drawn in
							Chris's home studio using a wacom tablet. No Dogface Soldier or
							trait has been outsourced or produced with the help of AI or
							computers.
						</p>
						<p>
							<img
								style={{ marginRight: 15, verticalAlign: 'bottom' }}
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIcSURBVHgBnVVNbtpAFP7GxumqlStVXU92UVWQ2XVTCW5AT1B6goRlRaoYpYQlvQH0BLQngBsQlVTqLrOusvAyCbEn702MwMlgE39CYph588173/vBRQHk4ED6H9/40ewqyrOroAiJd4I9SFo188ycvEPZr7bpqw2Nhjx93yhNRDhZW4qRDAP/2URyUGMSubkF9+5om72wkxxI0ubSchRhuayr8J/CTh6xwHb42POG2MUjeVptEf0EeUh0U327mCHXIwdDFIGEf7zlZrxhgTVaKIbvN9+KaPp/ttoQaxIj8JyNsBtIeHdfheem4tehPQi8K4nxCl48zHgk++8CinKOMkiFTz1yJygLxzFeCVP2XszeSJSCPsey0lyL/b12BKEPn0EYQSc9dfz3x6ZHLdVdjOUgkIjjkJT7XEAypox1mAveyxatfzkmfYlWNDIukcQNdbxok2Z1MlbWMFjc7uILNXBAJHO+yxxGbFPuif5NyxERjrC8jsh4H1p0UkIOo6O6F3VU7pQ8q06puqd05+eqVTK9Jvs1El0H5ocjQvX1T8+Ee8Mx0OfFq0O6zKOE602Zx1Jke81xPpnXGYkOV+FuhBGmJFzVmdH7tPsfspffuBxmmq2tRIbsrDrJad6xEfsR7IPt1mVDZTlRFFLPdsVKlJbEk1d5j86U7Y6LLaBZo2jmvIYQH1KSHqV6jLLgkjDZK0DxPy2XxE2hFe4ByTje/oKuua4AAAAASUVORK5CYII="
								alt=""
							/>
							The launch of the Dogface Discord has seen the community grow and
							come together as a powerful force. The community has already
							contributed to traits, the minting platform, marketing strategies,
							the story and many other aspects of the project.
						</p>
						<p>
							<img
								style={{ marginRight: 15, verticalAlign: 'bottom' }}
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHeSURBVHgB7ZdBUsIwFIb/tujKBTu3cec4ij2CjBfwBtQTwFbBEcdBXXoD4QaeQPEGVRjHnXHrij228b0CFZRCsOm4kH+GSdKEfn+T9OUV+O+ypl0UdZGHs+bCtgRMKFRSnnTb0DEgLgolKHVN1TzMStLvTFY7zUQDorHjUXGDLGVZnjx+aiUZeOUiaijVpsEtmJDCHpFKw1YPfWdD1v0eN3Ix/Hx7L4YDTVnrHsKcmnT/Hu2pMnhpnQ+XyjZ32PGQ8Q0XBA8wr9u4pkIRY/HHWhrIwaAGMQQV9O3iaJfPk7EZGAawJu0wFyvhvai7WoHMiIEv+FBKPWYyA6JRqH9/sp9wtGSt40FT2gZEY5dCtDodn960cG0D4nJT0JF2MKQM1viqUE4L1zYgj14khcciOI6PTATRiZkKrm0gMlF99idNpIcvZGCqiZRw1sKBiE2IxlYRoe1RllNJGhftkYCCEpSASQMjE1Qkw/mNCUIvobuHcLU9ahg/CwZZ1Qw4HA7TMjMDNOVlzIJXfX/8YgYGLBea8EkDlDrH9ZxTgjklwiNUXAtyPuyAX688J5G0lpwdp03NZsJZWablc+EsZ+Ifd+9+fn/9jaq8jmk+TLTgLCupI0rTf/1p5vg68KVYn1Lw2hGfAUI8AAAAAElFTkSuQmCC"
								alt=""
							/>
							Dogface Army founder Mark Tulloch has created a YouTube Playlist
							that documents the development of the Dogface NFT project from Day
							1. The daily brief is a tell all where you will see the intense
							dedication to the community and project from the fully doxxed HQ
							team.
						</p>
					</div>
					<button className="btn" style={{ marginBottom: 40 }}>
						{' '}
						Join The Discord{' '}
					</button>
				</div>
				<div className="svgcont">
					<img src="section1.png" alt="" className="heroimg" />
				</div>
			</div> */}

			<div className="hero">
				<div className="herotext">
					<div className="text">
						<p
							style={{
								fontSize: '28px',
								//   fontWeight: 'bold',
								fontFamily: 'Boston, cursive',
							}}
						>
							Welcome to the Dogface Army
						</p>
						<p>
							Congratulations, you are invited to an ultra exclusive army of
							serious NFT and crypto investors. Get ready to be blown away by
							the most heavily rewarded and tactical roadmap in NFT history.
							Stand a chance to win authentic tactical equipment like 5.11
							Tactical and even win a Tesla CyberTruck. Receive free airdrops.
						</p>
					</div>
					<button className="btn" style={{ marginBottom: 40 }}>
						{' '}
						Join The Discord{' '}
					</button>
				</div>
				<div className="svgcont">
					<img src="white-soldier.png" alt="" className="heroimg" />
				</div>
			</div>

			<div className="hero">
				<div className="herotext">
					<div className="text">
						<p
							style={{
								display: 'flex',
								fontSize: '40px',
								fontWeight: 'bold',
								alignItems: 'center',
								justifyContent: 'center',
								fontFamily: 'Boston, cursive',
							}}
						>
							FOR FREEDOM LOVERS ONLY
						</p>{' '}
						<br></br>
						<p>
							DFA is an exclusive club for serious Crypto & NFT investors. We
							are united by the relentless pursuit of financial freedom for
							ourselves and our loved ones. Dogface has formed a DAO that
							delivers passive income to NFT holders. The club provides you
							exclusive access to airdrops, staking rewards, real life events
							and the opportunity to engage with the most hardcore Crypto & NFT
							investor club in the world.
						</p>
					</div>
				</div>
			</div>

			<div className="image-list">
				<div className="caroimg">
					<img src="Airdrop.png" alt="Team-2" className="memberimg" />
					<h3 className="caroimg-title">FREE AIRDROPS</h3>
					<p className="armyformat caroimg-text">
						POAPS, $AMMO Rewards and Metaverse VOX Character
					</p>
					{/* <p className="armyrole">ARTIST</p> */}
					{/* <a href="https://linktr.ee/chrisjstaff" className="mt-2"></a> */}
				</div>
				<div className="caroimg">
					<img src="free NFTs.png" alt="Team-1" className="memberimg" />
					<h3 className="caroimg-title">1000 FREE NFT Giveaway</h3>
					<p className="armyformat caroimg-text">
						The community are all eligible to earn a FREE Dogface NFT (worth
						0.1ETH){' '}
					</p>
					{/* <a href="https://linktr.ee/mark_tulloch" className="mt-2"></a> */}
				</div>
				<div className="caroimg">
					<img src="P2E.png" alt="Team-4" className="memberimg" />
					<h3 className="caroimg-title">METAVERSE AND P2E</h3>
					<p className="armyformat caroimg-text">
						Unlock more of the Dogface story as you earn $AMMO in the Metaverse
					</p>
					{/* <a href="https://linktr.ee/TerryCrabb" className="mt-2"></a> */}
				</div>
				<div className="caroimg">
					<img src="Staking.png" alt="Team-3" className="memberimg" />
					<h3 className="caroimg-title">DOGFACE STAKING</h3>
					<p className="armyformat caroimg-text">
						A Dogface soldier needs their daily $AMMO, the native Dogface token.
					</p>
					{/* <p className="armyrole">MARKETING MANAGER</p> */}
					{/* <a href="https://linktr.ee/JamieTawhiao" className="mt-2"></a> */}
				</div>
			</div>

			<div className="hero">
				<div className="image-grid" id="baba">
					<div className="image-div">
						<img src="Sandbox.png" alt="" className="grid-img" />
						<p className="caroimg-text">- Sandbox Land Purchased</p>
					</div>
					<div className="image-div right">
						<img src="Ammo.png" alt="" className="grid-img" />
						<p className="caroimg-text">- 10000+ members</p>
					</div>
					<div className="image-div left">
						<img src="traits.png" alt="" className="grid-img" />
						<p className="caroimg-text">- 117+ Traits</p>
					</div>
					<div className="image-div">
						<img src="Investors.png" alt="" className="grid-img last-img" />
						<p className="caroimg-text">- Exclusive Investor club</p>
					</div>
				</div>
				<div className="herotext">
					<div className="text">
						<p
							style={{
								fontSize: '28px',
								fontWeight: 'bold',
								textAlign: 'center',
								fontFamily: 'Boston, cursive',
							}}
						>
							PRESALE & WHITE LIST!
						</p>
						<p>
							The Dogface presale has sold out and Sandbox land has been secured
							for the Dogface DAO. The $AMMO token and the staking LP are
							released, while the Game Development Team start creating the
							Dogface P2E.
						</p>
					</div>
				</div>
			</div>

			<div className="hero">
				<div className="herotext">
					<div className="text">
						<p
							style={{
								fontSize: '28px',
								fontWeight: 'bold',
								fontFamily: 'Boston, cursive',
							}}
						>
							2444 MINTS - OPERATION FREEBIRD
						</p>
						<p>
							When Operation Freebird is achieved our bootstrapped HQ team will
							go full time, 19 ETH will be given out to our veteran charity
							partners. The exclusive DFA Merch and 24k Gold Dogface Dog Tags
							will be released for DFA NFT holders and the 4 x 1ETH prizes are
							given to the winning DFA NFT holders.
						</p>
					</div>
				</div>
				<div className="svgcont">
					<img
						src="Team-6.png"
						alt=""
						style={{
							height: '300px',
							width: '300px',
						}}
					/>
				</div>
			</div>

			<div className="hero">
				<div className="svgcont">
					<img
						src="Mockup.jpg"
						alt=""
						style={{
							height: '300px',
							width: '600px',
						}}
					/>
				</div>
				<div className="herotext">
					<div className="text">
						<p
							style={{
								fontSize: '28px',
								fontWeight: 'bold',
								fontFamily: 'Boston, cursive',
							}}
						>
							4555 THE GREATEST NFT GIVEAWAY IN THE WORLD
						</p>
						<p>
							The Dogface Army will host a meetup in New York City and celebrate
							with the culmination of the 1000 FREE NFT giveaway and the great
							1,000,000 $AMMO giveaway!!
						</p>
					</div>
				</div>
			</div>

			<div className="hero">
				<div className="herotext">
					<div className="text">
						<p
							style={{
								display: 'flex',
								fontSize: '40px',
								fontWeight: 'bold',
								alignItems: 'center',
								justifyContent: 'center',
								fontFamily: 'Boston, cursive',
							}}
						>
							5555 THE DOGFACE JOURNEY BEGINS…
						</p>{' '}
						<br></br>
						<p>
							The Dogface Journey begins by donating the second 19 ETH to
							veteran charity partners and transferring 76ETH to the Dogface DAO
							wallet. The winner of the Cyber Truck is announced and DFA NFT
							holders can reserve their DFA VX character, as Dogface VX enters
							the metaverse.
						</p>
					</div>
				</div>
			</div>

			<div className="teamsection">
				<h2 className="caroimg-title">HEADQUARTERS</h2>
				<div className="carousel">
					<div className="image-list">
						<div className="caroimg">
							<img src="Team-1.png" alt="Team-1" className="memberimg" />
							<h3>maj gen fleece</h3>
							<p className="armyformat">Army - Retired</p>
							<p className="armyrole">PROJECT LEAD</p>
							<a href="https://linktr.ee/mark_tulloch" className="mt-2"></a>
						</div>
						<div className="caroimg">
							<img src="Team-2.png" alt="Team-2" className="memberimg" />
							<h3>the colonel</h3>
							<p className="armyformat">Army - Retired</p>
							<p className="armyrole">ARTIST</p>
							<a href="https://linktr.ee/chrisjstaff" className="mt-2"></a>
						</div>
						<div className="caroimg">
							<img src="Team-3.png" alt="Team-3" className="memberimg" />
							<h3>dogface og</h3>
							<p className="armyformat">Civilian</p>
							<p className="armyrole">MARKETING MANAGER</p>
							<a href="https://linktr.ee/JamieTawhiao" className="mt-2"></a>
						</div>
						<div className="caroimg">
							<img src="Team-4.png" alt="Team-4" className="memberimg" />
							<h3>cpt crabbman</h3>
							<p className="armyformat">Civilian</p>
							<p className="armyrole">COMMUNITY MANAGER</p>
							<a href="https://linktr.ee/TerryCrabb" className="mt-2"></a>
						</div>
						<div className="caroimg">
							<img src="Team-5.png" alt="Team-5" className="memberimg" />
							<h3>KILLAAK</h3>
							<p className="armyformat">Civilian</p>
							<p className="armyrole">OPERATIONS MANAGEMENT</p>
							<a href="https://linktr.ee/Richglover" className="mt-2"></a>
						</div>
					</div>
				</div>
			</div>

			{/* <div>
				<img
					src="collection.png"
					alt=""
					style={{ width: '100%', height: 'auto' }}
				/>
			</div> */}

			{/* <div className="watchloves">
				<img src="rarity.png" className="rarity" alt="" />
				<a
					href="#/mint"
					className="connecthyper"
					style={{ margin: '50px auto 60px auto', display: 'table' }}
				>
					MINT NOW
				</a>
				<h2>DOGFACE ARMY OUR PLEDGE</h2>
				<p>
					Both Mark Tulloch and Chris Wagstaff are retired Army Veterans. We
					also have a number of other Vets involved in the project as well as a
					team of dedicated civilians.
				</p>
				<p>
					For this reason, it is our pledge to donate 10% of all minting revenue
					& trading residuals to VETERAN CAUSES.
				</p>
				<p>
					In unison with this pledge, we will work with the DAO to make
					decisions around where the pledge goes. Our promise is to provide
					complete transparency on all charity funds & donations.
				</p>
			</div> */}

			{/* <div className="hero mintsteps">
				<div className="svgcont">
					<img src="section2.png" alt="" className="heroimg" />
				</div>
				<div className="herotext">
					<p className="herosectitle">Gen 1 - OG Battalion</p>
					<div className="text">
						<p>NFTs #1 - #300 (SOLD OUT)</p>
						<p>0.05 ETH</p>
						<p>
							<font style={{ color: '#20852d' }}>Membership Rewards:</font>
							<ul>
								<li>10,000 $AMMO</li>
								<li>OG Battalion 1/300 Airdrop NFT</li>
								<li>Metaverse Garrison Club Membership</li>
								<li>Hand signed digital DFA print posted to you.</li>
							</ul>
						</p>
						<p>
							<font style={{ color: '#20852d' }}>1st 24 hour mint BONUS:</font>
							<ul>
								<li>DFA 1%er Badge Airdrop NFT</li>
								<li>Metaverse Garrison Club - OG upgrade</li>
							</ul>
						</p>
					</div>
				</div>
      </div> */}

			{/* <div className="hero mintsteps">
				<div className="herotext">
					<p className="herosectitle">Gen 2 Alpha</p>
					<div className="text">
						<p>NFTs #301 - #2444 (Whitelist + Public)</p>
						<p>0.08 ETH</p>
						<p>
							<font style={{ color: '#20852d' }}>Membership Rewards:</font>
							<ul>
								<li>5,000 $AMMO</li>
								<li>OG Battalion 1/2144 Airdrop NFT</li>
								<li>Metaverse Garrison Club Membership</li>
								<li>DFA 3D Challenge Coin NFT</li>
							</ul>
						</p>
						<p>
							<font style={{ color: '#20852d' }}>1st 24 hour mint BONUS:</font>
							<ul>
								<li>Official DFA Dog Tags NFT</li>
								<li>Metaverse Garrison Club - VIP upgrade</li>
							</ul>
						</p>
					</div>
				</div>
				<div className="svgcont">
					<img src="section3.png" alt="" className="heroimg" />
				</div>
      </div> */}

			{/* <div className="hero mintsteps">
				<div className="svgcont">
					<img src="section4.png" alt="" className="heroimg" />
				</div>
				<div className="herotext">
					<p className="herosectitle">Gen 3 BRAVO</p>
					<div className="text">
						<p>NFTs #2445 - #5555 (Public Sale)</p>
						<p>0.1 ETH</p>
						<p>
							<font style={{ color: '#20852d' }}>Membership Rewards:</font>
							<ul>
								<li>1,000 $AMMO</li>
								<li>Metaverse Garrison Club Membership</li>
							</ul>
						</p>
						<p>
							<font style={{ color: '#20852d' }}>1st 24 hour mint BONUS:</font>
							<ul>
								<li>Official DFA Twitter Banner</li>
								<li>Official DFA Gen 1 POAP NFT</li>
							</ul>
						</p>
					</div>
				</div>
			</div> */}

			{/* <div className="teamsection">
				<h2>HEADQUARTERS</h2>
				<div className="carousel">
					<div className="image-list">
						<div className="caroimg">
							<img src="Team-1.png" alt="Team-1" className="memberimg" />
							<h3>maj gen fleece</h3>
							<p className="armyformat">Army - Retired</p>
							<p className="armyrole">PROJECT LEAD</p>
							<a href="https://linktr.ee/mark_tulloch" className="mt-2">
								<img
									src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB3VVNTgIxFH6dYcCNZm5A2bkQf04g3MAbiCdQlsYoQ4yyRE8gnkBvADcAozHu7BFYksC0tp0B2mk748Jo4pcQZt57fe/72vemAH8JHOGwyF8Ug5yLe9sYaDCUL3P/gESTqVE82By7/Et44ET5WOSRP39xZrgrW6e5/jwFKftPxTTlLGtLloo6vPbPuYoPAt9SQINOxhJqLBM/1vyBscauwMJeUwGVWejw88KsSS7fRqqpZASxoA92JCpoUAUXfCRUjFSTtkX4pt4CBkfOBB6qcs3utmTQwNc7DWcBjg64QfgWdQH5bRDb5UKiwiwg2esHp4OyR95FhJxPCH++d8YJFUkuvQAUsOeHF63e4tId5KkA6ONoP1wVwL3dbNtl0dWqiXnIU6G0NbIMjcn+4rWWNUqGQTzOWSfb2rMMjQ4KbWtVqcLuSxFCOe4gfiAsJ8jKXkXBej5o1G8CLBqa1Ud76TxgfFt/gpi98IMdiC6SScW2LkotHncIy/QInmWcjhFysGrxvwfNqHwG5DB5aKj54/iEXL0PsrlyPtc/g/9agDJi2OLS2uZRc4qRb51s950sR32Wfjk3puadrPrFXJi32a/gCxSdtvjmJFgwAAAAAElFTkSuQmCC"
									alt="Team Icon"
								/>
							</a>
						</div>
						<div className="caroimg">
							<img src="Team-2.png" alt="Team-2" className="memberimg" />
							<h3>the colonel</h3>
							<p className="armyformat">Army - Retired</p>
							<p className="armyrole">ARTIST</p>
							<a href="https://linktr.ee/chrisjstaff" className="mt-2">
								<img
									src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB3VVNTgIxFH6dYcCNZm5A2bkQf04g3MAbiCdQlsYoQ4yyRE8gnkBvADcAozHu7BFYksC0tp0B2mk748Jo4pcQZt57fe/72vemAH8JHOGwyF8Ug5yLe9sYaDCUL3P/gESTqVE82By7/Et44ET5WOSRP39xZrgrW6e5/jwFKftPxTTlLGtLloo6vPbPuYoPAt9SQINOxhJqLBM/1vyBscauwMJeUwGVWejw88KsSS7fRqqpZASxoA92JCpoUAUXfCRUjFSTtkX4pt4CBkfOBB6qcs3utmTQwNc7DWcBjg64QfgWdQH5bRDb5UKiwiwg2esHp4OyR95FhJxPCH++d8YJFUkuvQAUsOeHF63e4tId5KkA6ONoP1wVwL3dbNtl0dWqiXnIU6G0NbIMjcn+4rWWNUqGQTzOWSfb2rMMjQ4KbWtVqcLuSxFCOe4gfiAsJ8jKXkXBej5o1G8CLBqa1Ud76TxgfFt/gpi98IMdiC6SScW2LkotHncIy/QInmWcjhFysGrxvwfNqHwG5DB5aKj54/iEXL0PsrlyPtc/g/9agDJi2OLS2uZRc4qRb51s950sR32Wfjk3puadrPrFXJi32a/gCxSdtvjmJFgwAAAAAElFTkSuQmCC"
									alt="Team Icon"
								/>
							</a>
						</div>
						<div className="caroimg">
							<img src="Team-3.png" alt="Team-3" className="memberimg" />
							<h3>dogface og</h3>
							<p className="armyformat">Civilian</p>
							<p className="armyrole">MARKETING MANAGER</p>
							<a href="https://linktr.ee/JamieTawhiao" className="mt-2">
								<img
									src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB3VVNTgIxFH6dYcCNZm5A2bkQf04g3MAbiCdQlsYoQ4yyRE8gnkBvADcAozHu7BFYksC0tp0B2mk748Jo4pcQZt57fe/72vemAH8JHOGwyF8Ug5yLe9sYaDCUL3P/gESTqVE82By7/Et44ET5WOSRP39xZrgrW6e5/jwFKftPxTTlLGtLloo6vPbPuYoPAt9SQINOxhJqLBM/1vyBscauwMJeUwGVWejw88KsSS7fRqqpZASxoA92JCpoUAUXfCRUjFSTtkX4pt4CBkfOBB6qcs3utmTQwNc7DWcBjg64QfgWdQH5bRDb5UKiwiwg2esHp4OyR95FhJxPCH++d8YJFUkuvQAUsOeHF63e4tId5KkA6ONoP1wVwL3dbNtl0dWqiXnIU6G0NbIMjcn+4rWWNUqGQTzOWSfb2rMMjQ4KbWtVqcLuSxFCOe4gfiAsJ8jKXkXBej5o1G8CLBqa1Ud76TxgfFt/gpi98IMdiC6SScW2LkotHncIy/QInmWcjhFysGrxvwfNqHwG5DB5aKj54/iEXL0PsrlyPtc/g/9agDJi2OLS2uZRc4qRb51s950sR32Wfjk3puadrPrFXJi32a/gCxSdtvjmJFgwAAAAAElFTkSuQmCC"
									alt="Team Icon"
								/>
							</a>
						</div>
						<div className="caroimg">
							<img src="Team-4.png" alt="Team-4" className="memberimg" />
							<h3>cpt crabbman</h3>
							<p className="armyformat">Civilian</p>
							<p className="armyrole">COMMUNITY MANAGER</p>
							<a href="https://linktr.ee/TerryCrabb" className="mt-2">
								<img
									src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB3VVNTgIxFH6dYcCNZm5A2bkQf04g3MAbiCdQlsYoQ4yyRE8gnkBvADcAozHu7BFYksC0tp0B2mk748Jo4pcQZt57fe/72vemAH8JHOGwyF8Ug5yLe9sYaDCUL3P/gESTqVE82By7/Et44ET5WOSRP39xZrgrW6e5/jwFKftPxTTlLGtLloo6vPbPuYoPAt9SQINOxhJqLBM/1vyBscauwMJeUwGVWejw88KsSS7fRqqpZASxoA92JCpoUAUXfCRUjFSTtkX4pt4CBkfOBB6qcs3utmTQwNc7DWcBjg64QfgWdQH5bRDb5UKiwiwg2esHp4OyR95FhJxPCH++d8YJFUkuvQAUsOeHF63e4tId5KkA6ONoP1wVwL3dbNtl0dWqiXnIU6G0NbIMjcn+4rWWNUqGQTzOWSfb2rMMjQ4KbWtVqcLuSxFCOe4gfiAsJ8jKXkXBej5o1G8CLBqa1Ud76TxgfFt/gpi98IMdiC6SScW2LkotHncIy/QInmWcjhFysGrxvwfNqHwG5DB5aKj54/iEXL0PsrlyPtc/g/9agDJi2OLS2uZRc4qRb51s950sR32Wfjk3puadrPrFXJi32a/gCxSdtvjmJFgwAAAAAElFTkSuQmCC"
									alt="Team Icon"
								/>
							</a>
						</div>
						<div className="caroimg">
							<img src="Team-5.png" alt="Team-5" className="memberimg" />
							<h3>KILLAAK</h3>
							<p className="armyformat">Civilian</p>
							<p className="armyrole">OPERATIONS MANAGEMENT</p>
							<a href="https://linktr.ee/Richglover" className="mt-2">
								<img
									src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB3VVNTgIxFH6dYcCNZm5A2bkQf04g3MAbiCdQlsYoQ4yyRE8gnkBvADcAozHu7BFYksC0tp0B2mk748Jo4pcQZt57fe/72vemAH8JHOGwyF8Ug5yLe9sYaDCUL3P/gESTqVE82By7/Et44ET5WOSRP39xZrgrW6e5/jwFKftPxTTlLGtLloo6vPbPuYoPAt9SQINOxhJqLBM/1vyBscauwMJeUwGVWejw88KsSS7fRqqpZASxoA92JCpoUAUXfCRUjFSTtkX4pt4CBkfOBB6qcs3utmTQwNc7DWcBjg64QfgWdQH5bRDb5UKiwiwg2esHp4OyR95FhJxPCH++d8YJFUkuvQAUsOeHF63e4tId5KkA6ONoP1wVwL3dbNtl0dWqiXnIU6G0NbIMjcn+4rWWNUqGQTzOWSfb2rMMjQ4KbWtVqcLuSxFCOe4gfiAsJ8jKXkXBej5o1G8CLBqa1Ud76TxgfFt/gpi98IMdiC6SScW2LkotHncIy/QInmWcjhFysGrxvwfNqHwG5DB5aKj54/iEXL0PsrlyPtc/g/9agDJi2OLS2uZRc4qRb51s950sR32Wfjk3puadrPrFXJi32a/gCxSdtvjmJFgwAAAAAElFTkSuQmCC"
									alt="Team Icon"
								/>
							</a>
						</div>
						<div className="caroimg">
                        <img src="Team-6.png" alt="Team-6" className="memberimg" />
                        <h3>Major Gordon</h3>
                        <p className="armyformat">Civilian</p>
                        <p className="armyrole">CIVILIAN</p>
                        <a href="https://www.dogface.io/" className="mt-2">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB3VVNTgIxFH6dYcCNZm5A2bkQf04g3MAbiCdQlsYoQ4yyRE8gnkBvADcAozHu7BFYksC0tp0B2mk748Jo4pcQZt57fe/72vemAH8JHOGwyF8Ug5yLe9sYaDCUL3P/gESTqVE82By7/Et44ET5WOSRP39xZrgrW6e5/jwFKftPxTTlLGtLloo6vPbPuYoPAt9SQINOxhJqLBM/1vyBscauwMJeUwGVWejw88KsSS7fRqqpZASxoA92JCpoUAUXfCRUjFSTtkX4pt4CBkfOBB6qcs3utmTQwNc7DWcBjg64QfgWdQH5bRDb5UKiwiwg2esHp4OyR95FhJxPCH++d8YJFUkuvQAUsOeHF63e4tId5KkA6ONoP1wVwL3dbNtl0dWqiXnIU6G0NbIMjcn+4rWWNUqGQTzOWSfb2rMMjQ4KbWtVqcLuSxFCOe4gfiAsJ8jKXkXBej5o1G8CLBqa1Ud76TxgfFt/gpi98IMdiC6SScW2LkotHncIy/QInmWcjhFysGrxvwfNqHwG5DB5aKj54/iEXL0PsrlyPtc/g/9agDJi2OLS2uZRc4qRb51s950sR32Wfjk3puadrPrFXJi32a/gCxSdtvjmJFgwAAAAAElFTkSuQmCC" alt="Team Icon" />                          
                        </a>
                    </div>
                    <div className="caroimg">
                        <img src="Team-7.png" alt="Team-7" className="memberimg" />
                        <h3>wo ball buster</h3>
                        <p className="armyformat">Army - Current</p>
                        <p className="armyrole">MILITARY HISTORIAN</p>
                        <a href="https://www.dogface.io/" className="mt-2">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB3VVNTgIxFH6dYcCNZm5A2bkQf04g3MAbiCdQlsYoQ4yyRE8gnkBvADcAozHu7BFYksC0tp0B2mk748Jo4pcQZt57fe/72vemAH8JHOGwyF8Ug5yLe9sYaDCUL3P/gESTqVE82By7/Et44ET5WOSRP39xZrgrW6e5/jwFKftPxTTlLGtLloo6vPbPuYoPAt9SQINOxhJqLBM/1vyBscauwMJeUwGVWejw88KsSS7fRqqpZASxoA92JCpoUAUXfCRUjFSTtkX4pt4CBkfOBB6qcs3utmTQwNc7DWcBjg64QfgWdQH5bRDb5UKiwiwg2esHp4OyR95FhJxPCH++d8YJFUkuvQAUsOeHF63e4tId5KkA6ONoP1wVwL3dbNtl0dWqiXnIU6G0NbIMjcn+4rWWNUqGQTzOWSfb2rMMjQ4KbWtVqcLuSxFCOe4gfiAsJ8jKXkXBej5o1G8CLBqa1Ud76TxgfFt/gpi98IMdiC6SScW2LkotHncIy/QInmWcjhFysGrxvwfNqHwG5DB5aKj54/iEXL0PsrlyPtc/g/9agDJi2OLS2uZRc4qRb51s950sR32Wfjk3puadrPrFXJi32a/gCxSdtvjmJFgwAAAAAElFTkSuQmCC" alt="Team Icon" />                          
                        </a>
                    </div>
                    <div className="caroimg">
                        <img src="Team-8.png" alt="Team-8" className="memberimg" />
                        <h3>doctor 3d</h3>
                        <p className="armyformat">Civilian</p>
                        <p className="armyrole">3D PRINTING</p>
                        <a href="https://www.dogface.io/" className="mt-2">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB3VVNTgIxFH6dYcCNZm5A2bkQf04g3MAbiCdQlsYoQ4yyRE8gnkBvADcAozHu7BFYksC0tp0B2mk748Jo4pcQZt57fe/72vemAH8JHOGwyF8Ug5yLe9sYaDCUL3P/gESTqVE82By7/Et44ET5WOSRP39xZrgrW6e5/jwFKftPxTTlLGtLloo6vPbPuYoPAt9SQINOxhJqLBM/1vyBscauwMJeUwGVWejw88KsSS7fRqqpZASxoA92JCpoUAUXfCRUjFSTtkX4pt4CBkfOBB6qcs3utmTQwNc7DWcBjg64QfgWdQH5bRDb5UKiwiwg2esHp4OyR95FhJxPCH++d8YJFUkuvQAUsOeHF63e4tId5KkA6ONoP1wVwL3dbNtl0dWqiXnIU6G0NbIMjcn+4rWWNUqGQTzOWSfb2rMMjQ4KbWtVqcLuSxFCOe4gfiAsJ8jKXkXBej5o1G8CLBqa1Ud76TxgfFt/gpi98IMdiC6SScW2LkotHncIy/QInmWcjhFysGrxvwfNqHwG5DB5aKj54/iEXL0PsrlyPtc/g/9agDJi2OLS2uZRc4qRb51s950sR32Wfjk3puadrPrFXJi32a/gCxSdtvjmJFgwAAAAAElFTkSuQmCC" alt="Team Icon" />                          
                        </a>
                    </div>
					</div>
				</div>
			</div> */}

			<div className="faqsection">
				<h2 className="caroimg-title">FREQUENTLY ASKED QUESTIONS</h2>
				<div className="faqitemslist">
					<Faq data={faqdata} getRowOptions={setRowsOption} />
				</div>
			</div>

			{/* <div className="footersection">
				<img src="logo.png" alt="logo" className="footerlogo" />
				<h2>Join our community</h2>
				<div class="sociallogins">
					<figure>
						<a href="https://opensea.io/collection/dogfacearmynft">
							<img
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANTSURBVHgBpVc/c9MwFH+S7B4Lh5nowB1i4zjCuRtjetCBCfoJmm9AO5YW6lxpO5JubA2foOnWhUuYYCPQwjGKESYPLJBY4kmu3Th2bDn87hzH9pPeH/3eexKBmuB7d30A5oMiHijpAaEhKCWARkJsfRvWmYvYCPHde01gZAcUoGLwSkQFXgMYjdoi+C7gf5RPKG1CfXSrjGCzPvD9+6/RtDf6L8wHHxhreY8W/4Tvfn4sEsh5zgPuwcLV4zm9LQYlgdj80p5+nfPcW7n5AW16APYI8bpSKoGOeCuLgBF4n7Fp8sGEGogPdTBiSyBhtVJOqgDnXytUzvcaLUyZdbABQUZL1Ub5gQiGAl0LrcYp1eHBHZ5TjtgBW2g+RE5HbJ8vm+fI0fktLEZ64Lo7GeXGa1tWE+iZOxunUULvQxN+IDZFpsUD30uV44RrYAchnp/h+qohMvhZ5oMxgC5bGXBhOOUHuAa2aTVicZglnOCvZ4rQtAGUavKVc4DCk/g2du3YLdVhTC6NC++Iyo0VmyiDsuWTEV+HHsOubJQLJFWQPjksVq6bSxGo7EEV3L+cAiEcqtE2IU0wjmKDKREwLyLwqYVYV2yddTNvKInTZcQGhSMUsyKwUylBFMdUPLp8xlxVuFQZDlzCEFhCdbEiLHTMRoCUdFZFmtln86s50ClW7Paz8mqAY+KankQs/hDS8nWLlrAn385cSRotREd8v2EU6d2N+S/dT2CKFdYBRTZwWa6bKhj97gCj17JTO0MHBXrgRkez1E9vBjC3D40HaqIiSuph0jZTT8fOakLQNBpK8Qmvh/q7ibexuqjQYPMQL84DsEDSMHLGxnxpTc17iPOux2yX8qRwRiyhk12oDFppgeJWTrHGBV9i5WO3C8VdSXehvq0BGcUHZkxRp+wmWZLSnO82nqIpxyXzdZFEnzH1qns3JbcwtDrdpiug6X455caAV41ujQ5XH0puiO2vaYpmK9yYrVv25PrQ5J1QrFGwe8VG78q+ZcOxV1yQNTNLG+ZzZ3rDMAfwKCVzHieYeWgI+79OvYc3fgBUHpGKERebx+Ll2eksEbuzWryzXcMe0KwQDTHEb/HewzAPKmTtlKdGaD6wsY8nU9+cUBOY/hAN655S/wHcYHEJ1cJSHAAAAABJRU5ErkJggg=="
								alt="Twitter"
							/>
						</a>
					</figure>
					<figure>
						<a href="https://www.twitter.com/dogfaceNFT" target="_blank">
							<img
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI+SURBVHgB7VZNbtNAFP7GjhsJ8eMlYjXsWJBgLoCSE1BO0PYEbZdQIFNRKDvgBE1OgNixQe0RDEGwzHTHDrMDJZ7HsxdV7HiSsWoJIeXbJH7zPO+bN5+/GWCNNf4xBBqCVDJE6/o2BN0DIeGZP+uD8XAxLwq1ihMrAfnibk8/+3qGOsVfd3eR0tuKIQ2kjzA1CdobWyDq6Sfj/nyCKLNDkP6EJ5R+/OUQLsWPuwMYUg6pCab+ff5JtNIXHfAKKf4syn95Qvmq82bVjPL4jnQuDjHixQ0QXNucHygS8MwFM97HPfmyM5GKi9hggh7cEPKEu0z2vKyLIoHphi69KBEEEyZyUknEUARXGDpkbalyeFGER50hR7eqZxExjPnAf87ybhlvk/UygBuBfpW4SyLkT6kdhjDpafaIBiFoJidPv5+X48UtCK6wqMx7phWjYVQVz9AqPGUaCFLJAnTfWyeQdUGFDuQOZWiExiHcCORIWwq5gzWIJYtaIJB3IXMsQlOd0Mus3auMtn+HLERi6VpfrIGllm49DdmKT5lCD5eDZue7vSzBs44IfweX1cLU769K8W0DyacfSfjg1gjC/EHm5ULcRB2Q2dfPxx9XpTldSLI7AlvuCVzd0eL7tQjktuxfjeCz17trgU/TdF8ffBs65hedUB519+DRQ5DIjk+JrPUENxB/MbPWjlZjjRqovJLxfm/bT8QCeMVc2OBd3WuclcAiGS9iQUnuzI08aMQvjmmOxeya8fwFc401/kv8BVLE3QULbzw8AAAAAElFTkSuQmCC"
								alt="Twitter"
							/>
						</a>
					</figure>
					<figure>
						<a href="https://discord.gg/a5M6j3fnC7" target="_blank">
							<img
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJbSURBVHgB7Va7bhNBFD0za1tukLaky7gDhGHp0tnwA4SSKvYXxJQoRCzKA1GFfAFOBx18gZ0vwBIBpWNqqqVEzs5wd/1cz4x3IzmCSD6SvXvv3MfZOzN3BlhjjZsEcXgvEOEd4RwPhZ/Y4Aoo5RmI/ftNcLZNr1v081Hx+vR8PEo4IiPDC5kal28d039LHNYTuQ+lT+XeeX9ZfOZOXN8Cx4c0qYnIoo8cthKIn8ndHwMUJSDe0pepci95xWogMfQeyXAQLQ5wq7mu7KwwOdJY3mXHNmBUYPz1P7F6RFSF2mIVzAqo8mtcD3xbFWxT0MR1geOpqZpDuuVWO/cLYME4h50ARnvdDq2Tff0GGqdwG32GZi9SWzea80K2EXE0HE5d+eq8PRHoKyJqTjsZCyJHTSccS+/FQb1LS3zbiOSxRjZlBszeRqmjZeS4FBo2cambkbXuwgaNwEpgaQ/nKkI+ooI+fu3g7oZBAIr7cIF52VJWlVnaimplZO2ZNpMh7dUm77M1wJmA0wMdOmD8dCpKvIFYh5aox+LowQaNnaXzrHXHGQ/MNwnko0UkW0TCbZEk5ejQE0uh4ykBjn8B5kUmAaWlwzwa7/0iC3Hmo/SJ20dP9d7Uo/dL+k9u/6a9u0lidc66SroBhsPnxPyM5D9pAJbOY3VGUl8Q0U/UiN7R8wtN10PSbxrEtHop975/nCgsp2EgEMehpYl05e63NgpAHNV7RKKZUSbd8bLUptNQzqvdN6IZkdEBMrpQSBQhkPiq+Os4M7VwnORdzfIDXtVnP2iKMPCxxhr/O/4C29bSVjAAVRcAAAAASUVORK5CYII="
								alt="Discord"
							/>
						</a>
					</figure>
					<figure>
						<a href="https://www.youtube.com/c/fleececrypto" target="_blank">
							<img
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGgSURBVHgB7ZY/TsMwFMa/OG3V0UywYXaKeoT2Bj0CPUEPAIhUFYiVG8AJurLByFhUBkbPLHgESm2e+zcmtMRRMpGfZCmOnbzvPT8/Gygp+e8E2wZFJDhQ56gyDk1t/RkHA3cmayOdPtMKE61k9CLhI0AMDlsIg3MYNKnLkQ+KLI0wNX159vywUYAYNDrk2RBFok07LoI5gyF6KBob3RiugHnYi+WHjZUAETXteue15tvgC1uuAIRf6b3Xpk+e3CIr1U+RFOCD0VKejo9tQlFPwpfYlo4JCLzDb7NZnowP6LHrJcRokRTAsq8/ibgBC9sUkWt4km0JfuNDKVTYGzypIAfE1VGPqlxEEUgXxYDJpABby1kAH1Zle2payMhagD08qBSmImT74rIxpK3YoebPzFZCQE1BT5GOIMpkeMmkJld/ir8XFw2bREVXQ0W7ZmfZcXeBPTKLxhjHhiuAzmsULiBwaoWTder+VfL27hPN2kMwq4x15IMizx8pb7pUPe/iA39cyeyp9Z7uSmbRZAhmnuGLKxn5QNeykUJJSckGvgHiZouw4C/LCQAAAABJRU5ErkJggg=="
								alt="Youtube"
							/>
						</a>
					</figure>
					<figure>
						<a href="https://www.reddit.com/r/DogfaceDAOnft/">
							<img
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMSSURBVHgB7VbLbtNAFD1jO0VCqJgFEjsmuwo11P2DiB9o+IK2O3Ztd0CK6qgKXZJ8Qds/CD9A0x07rBYQu8yeBamQkJAfw52Jm7cdN0lLFz2SNY5z586Z+wbu8J/BcM3gLrdhPnBgRG1R/u7hOgjwg+d7iFCClE1InCL0PeH+EHy/UIKBQxKx49Nq4u35zvwJVAut+BC7TzXdVnJ6adNTQSTJCmyL1op499W9lLIwI/j+clEt9GzCNxswQ/oti2ByBYzZkFFF7H47iomuE4mn/ftnJkAK1/Xqm03heuq2DfVw17GRC3/BMNa4u0TELA5loUheDGzH7CjSjcnnnuj/qMmQuSkmisjlWkT0RH1GaNXmRoBXnzlqoeA7Hve/9nWEl0SkDsl2yEqrw0SvHIQ6rXL3OSKTw8Q63bAE5X+EHvw/QriifRV9mQjoQGNsjZ5SHNlpKj2djoFfV6mIrAT0ze4tbtFmZVaKXhyT6QRMtqf9OA0YqC6ElPemQ+9rWq/BGuL1Wb0nckmguvyFfjq4ETBPlM9W1ZvZObywQR9f4ebwxH7x+KL96efnThZkN7HIIJMtCJmxopaYgMywKdwU5fM8DDOfQERQmuVJ5pFOuUmIC1KHgDVYHEZAUU2d7Eif8kbncWVUJqpf5rjYPavpAExDXJCMPqWbicIGGz7MHiXAbGQGWTMm28uCA4eKS9hCMgmqasFHRIZKJdVi+ZCEciNVO7+JhQWVzttJqshN3XN7zegvKcghGZF0KWnclOKtLHBIdV+5LEXRYJB21enmMclv88EpxhHQUNUvDaq76UEjAaoER6wyQcdAwI/0Av6+cJJYF3w/3x211NBhyIcdpUylVIO6X5MfLFEs5VoJh9dJZjudgB4kIurdclxZFlAp6P9uDHc93UusxQ2ahLYwGqDaumL3fGP489huqEmYgatnuESQK1hcwCTjqV1yzM1TCXSJVB0HMvhAbbiIaaBiglk7ouwlxk22eUDViCDYJumVCWTadKjXGc2tWjwjpmKqsVyPYqog9SMMRJYB5A63Dv8AYYVLhx0vaa0AAAAASUVORK5CYII="
								alt="Reddit"
							/>
						</a>
					</figure>
				</div>
				<p>©2022 DogFace Army. All rights reserved.</p>
			</div> */}

			{/* <li className="mintbox" onClick={(e) => {
                        e.preventDefault();
                        dispatch(connectM());
                    }}>
                    <Link to="/mint">MINT</Link>
                    </li> */}
		</div>
	);
};

export default home;
