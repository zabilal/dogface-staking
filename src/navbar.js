import { HashLink as Link } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { connectM } from "./redux/blockchain/blockchainActions";
import { fetchDataM } from "./redux/data/dataActions";
import { useState } from 'react';


import "./styles/navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchDataM(blockchain.account));
    }
  };

  getData();

  
  
  //   const toggle = document.getElementById("toggle");
  //   const nav = document.getElementById("nav-wrap");
  //   console.log("4");
  //   console.log(toggle);
  //   console.log(nav);

  return (
		<nav>
			{/* <ul>
            <Link className="logo" to="/"><img src="https://i.ibb.co/dpGjR2C/wolfemoji.png" width="63" height="60"/></Link>
             <li className="mintbox" onClick={(e) => {
                    e.preventDefault();
                    dispatch(connectM());
                }}>
                <Link to="/mint">MINT</Link>
                </li>
                <li className="stakebox"><Link to="/staking">STAKE</Link></li>
            </ul> */}
			<div id="toggle" className="toggle">
				=
			</div>
			<div id="nav-wrap" className="nav-wrap">
				<div>
					<Link to="/">
						<img
							src="/logo.png"
							className="logo-nav"
							style={{ height: 230, marginBottom: 35 }}
						/>
					</Link>
				</div>
				<Link to="/mint">
					<svg
						width="25"
						height="25"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						focusable="false"
						color="#FCFCFC"
						aria-hidden="true"
					>
						<path
							d="M9.99219 17.6172C10.5312 17.6172 10.9609 17.2031 10.9609 16.6719V9.72656C11.7344 9.35938 12.2734 8.57031 12.2734 7.66406C12.2734 6.75781 11.7344 5.96875 10.9609 5.60156V3.46094C10.9609 2.95312 10.5156 2.53906 9.99219 2.53906C9.48438 2.53906 9.02344 2.95312 9.02344 3.46094V5.60156C8.25 5.96875 7.71875 6.75781 7.71875 7.66406C7.71875 8.5625 8.25 9.35938 9.02344 9.72656V16.6719C9.02344 17.1953 9.47656 17.6172 9.99219 17.6172ZM13.3516 12.4766C13.3516 13.3828 13.8828 14.1719 14.6562 14.5391V16.6875C14.6562 17.1953 15.1094 17.6172 15.625 17.6172C16.1562 17.6172 16.5938 17.2031 16.5938 16.6875V14.5391C17.3672 14.1719 17.9062 13.3906 17.9062 12.4766C17.9062 11.5703 17.3672 10.7812 16.5938 10.4141V3.47656C16.5938 2.95312 16.1484 2.53906 15.625 2.53906C15.1172 2.53906 14.6562 2.95312 14.6562 3.47656V10.4219C13.8828 10.7812 13.3516 11.5703 13.3516 12.4766ZM2.08594 12.4766C2.08594 13.3828 2.625 14.1719 3.39844 14.5391V16.6875C3.39844 17.1953 3.84375 17.6172 4.36719 17.6172C4.89844 17.6172 5.33594 17.2031 5.33594 16.6875V14.5391C6.10938 14.1719 6.64062 13.3906 6.64062 12.4766C6.64062 11.5703 6.10938 10.7812 5.33594 10.4219V3.47656C5.33594 2.95312 4.89062 2.53906 4.36719 2.53906C3.85938 2.53906 3.39844 2.95312 3.39844 3.47656V10.4141C2.625 10.7812 2.08594 11.5703 2.08594 12.4766ZM8.94531 7.66406C8.94531 7.08594 9.41406 6.61719 9.99219 6.61719C10.5938 6.61719 11.0469 7.08594 11.0469 7.66406C11.0469 8.25781 10.5938 8.71094 9.99219 8.71094C9.41406 8.71094 8.94531 8.25781 8.94531 7.66406ZM14.5781 12.4766C14.5781 11.8984 15.0469 11.4297 15.625 11.4297C16.2266 11.4297 16.6797 11.8984 16.6797 12.4766C16.6797 13.0703 16.2266 13.5312 15.625 13.5312C15.0469 13.5312 14.5781 13.0703 14.5781 12.4766ZM3.3125 12.4766C3.3125 11.8984 3.78125 11.4297 4.36719 11.4297C4.96094 11.4297 5.41406 11.8984 5.41406 12.4766C5.41406 13.0703 4.96094 13.5312 4.36719 13.5312C3.78125 13.5312 3.3125 13.0703 3.3125 12.4766Z"
							fill="white"
						></path>
					</svg>
					MINT
				</Link>
				<Link to="/staking">
					<svg
						width="25"
						height="25"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						focusable="false"
						color="#FCFCFC"
						aria-hidden="true"
					>
						<path
							d="M11.6172 19.0859L17.6562 15.5859C18.3438 15.1875 18.6719 14.8203 18.6719 14.2656C18.6719 13.7031 18.3438 13.3438 17.6562 12.9375L16.75 12.4141L17.6562 11.8906C18.3438 11.4922 18.6719 11.125 18.6719 10.5703C18.6719 10.0078 18.3438 9.64844 17.6562 9.25L16.5781 8.625L17.6562 8C18.3438 7.59375 18.6719 7.23438 18.6719 6.67969C18.6719 6.11719 18.3438 5.75781 17.6562 5.35156L11.6172 1.85156C11.1797 1.60156 10.8438 1.46875 10.4922 1.46875C10.1484 1.46875 9.8125 1.60156 9.375 1.85156L3.33594 5.35156C2.64844 5.75781 2.32031 6.11719 2.32031 6.67969C2.32031 7.23438 2.64844 7.59375 3.33594 8L4.41406 8.625L3.33594 9.25C2.64844 9.64844 2.32031 10.0078 2.32031 10.5703C2.32031 11.125 2.64844 11.4922 3.33594 11.8906L4.24219 12.4141L3.33594 12.9375C2.64844 13.3438 2.32031 13.7031 2.32031 14.2656C2.32031 14.8203 2.64844 15.1875 3.33594 15.5859L9.375 19.0859C9.8125 19.3359 10.1484 19.4688 10.4922 19.4688C10.8438 19.4688 11.1797 19.3359 11.6172 19.0859ZM10.4922 10C10.3984 10 10.3125 9.96875 10.2031 9.90625L4.64062 6.75C4.60156 6.73438 4.58594 6.71094 4.58594 6.67969C4.58594 6.64062 4.60156 6.61719 4.64062 6.60156L10.2031 3.44531C10.3125 3.38281 10.3984 3.35156 10.4922 3.35156C10.5859 3.35156 10.6719 3.38281 10.7891 3.44531L16.3516 6.60156C16.3828 6.61719 16.4062 6.64062 16.4062 6.67969C16.4062 6.71094 16.3828 6.73438 16.3516 6.75L10.7891 9.90625C10.6719 9.96875 10.5859 10 10.4922 10ZM10.4922 11.8828C10.8438 11.8828 11.1797 11.75 11.6172 11.5L14.8359 9.63281L16.3516 10.4922C16.3828 10.5156 16.4062 10.5312 16.4062 10.5703C16.4062 10.6016 16.3828 10.625 16.3516 10.6406L10.7891 13.8047C10.6719 13.8672 10.5859 13.8984 10.4922 13.8984C10.3984 13.8984 10.3125 13.8672 10.2031 13.8047L4.64062 10.6406C4.60156 10.625 4.58594 10.6016 4.58594 10.5703C4.58594 10.5312 4.60156 10.5156 4.64062 10.4922L6.15625 9.63281L9.375 11.5C9.8125 11.75 10.1484 11.8828 10.4922 11.8828ZM10.2031 17.4922L4.64062 14.3359C4.60156 14.3203 4.58594 14.2969 4.58594 14.2656C4.58594 14.2266 4.60156 14.2109 4.64062 14.1875L5.98438 13.4297L9.375 15.3906C9.8125 15.6406 10.1484 15.7734 10.4922 15.7734C10.8438 15.7734 11.1797 15.6406 11.6172 15.3906L15.0078 13.4297L16.3516 14.1875C16.3828 14.2109 16.4062 14.2266 16.4062 14.2656C16.4062 14.2969 16.3828 14.3203 16.3516 14.3359L10.7891 17.4922C10.6719 17.5547 10.5859 17.5859 10.4922 17.5859C10.3984 17.5859 10.3125 17.5547 10.2031 17.4922Z"
							fill="white"
						></path>
					</svg>
					STAKE
				</Link>
				<a href="https://app.uniswap.org/#/swap?chain=mainnet" target="_blank">
					<img src="/buy.svg" className="navbarlinkimgs" />
					LP / Buy{' '}
				</a>
				<Link to="/airdrop">
					<svg
						width="25"
						height="25"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						focusable="false"
						color="#FCFCFC"
						aria-hidden="true"
					>
						<path
							d="M12.0833 10.8333C12.0833 10.2808 11.8638 9.75089 11.4731 9.36019C11.0824 8.96949 10.5525 8.75 10 8.75C9.44746 8.75 8.91756 8.96949 8.52686 9.36019C8.13616 9.75089 7.91666 10.2808 7.91666 10.8333C7.91666 11.6667 8.40833 12.3667 9.10833 12.7083L8.18333 13.625C7.58157 13.2331 7.1225 12.6573 6.87451 11.9833C6.62651 11.3094 6.60285 10.5734 6.80705 9.88489C7.01126 9.1964 7.43239 8.5923 8.00774 8.16256C8.58309 7.73282 9.28187 7.50043 10 7.5C10.7181 7.50043 11.4169 7.73282 11.9923 8.16256C12.5676 8.5923 12.9887 9.1964 13.1929 9.88489C13.3971 10.5734 13.3735 11.3094 13.1255 11.9833C12.8775 12.6573 12.4184 13.2331 11.8167 13.625L10.9 12.7083C11.6 12.3667 12.0833 11.6667 12.0833 10.8333ZM10 2.5C5.41666 2.5 1.66666 6.25 1.66666 10.8333C1.66666 13.3833 2.81666 15.6667 4.61666 17.1917L5.50833 16.3083C3.925 15 2.91666 13.0333 2.91666 10.8333C2.91666 6.925 6.09166 3.75 10 3.75C13.9083 3.75 17.0833 6.925 17.0833 10.8333C17.0833 13.0333 16.075 15 14.4917 16.3083L15.3833 17.1917C17.1833 15.6583 18.3333 13.3833 18.3333 10.8333C18.3333 6.25 14.5833 2.5 10 2.5ZM15.8333 10.8333C15.8333 7.60833 13.225 5 10 5C8.78689 4.99925 7.60377 5.37699 6.61554 6.08058C5.62731 6.78417 4.88322 7.77854 4.48696 8.92511C4.09071 10.0717 4.06204 11.3133 4.40496 12.4769C4.74788 13.6406 5.44529 14.6682 6.4 15.4167L7.29166 14.525C6.15833 13.6833 5.41666 12.35 5.41666 10.8333C5.41666 8.30833 7.475 6.25 10 6.25C12.525 6.25 14.5833 8.30833 14.5833 10.8333C14.5833 12.35 13.8417 13.6833 12.7083 14.525L13.6083 15.4167C14.3016 14.8706 14.8619 14.1745 15.2473 13.3806C15.6327 12.5867 15.8331 11.7158 15.8333 10.8333Z"
							fill="white"
						></path>
					</svg>
					Airdrop
				</Link>
				<a href="https://snapshot.org/" target="_blank">
					<img src="/vote.png" className="navbarlinkimgs" /> Vote{' '}
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
