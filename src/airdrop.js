import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectM } from "./redux/blockchain/blockchainActions";
import { connect, isConnected } from "./redux/stakeBlockchain/blockchainActions";
import { fetchData, balance, rewards} from "./redux/stakeData/dataActions";
import {fetchDataM, hasApproved } from "./redux/data/dataActions2";

import "./styles/stake.css";

const Airdrop = () => {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [feedback, setFeedback] = useState("STAKE");
    const [claiming, setClaiming] = useState(false)
    const [_stake, _unStake] = useState("STAKE");
    const account = blockchain.account;
    const [tokenId, setTokenId] = useState([]);
    const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });
    useEffect(()=>{
        dispatch(connectM())
        
    },[])

    // useEffect(()=>{
    //     setTimeout(() => {
    //         hasApproved ? dispatch(connect()) : dispatch(connectM())
    //     }, 3000);
    // },[])
    const getConfig = async () => {
    const configResponse = await fetch("/stakeConfig/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
        SET_CONFIG(config);
    };
    const getDataM = () => {
        if (account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchDataM())
        }
    };
    const getData = () => {
        if (account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData())
        }
    };
    useEffect(() => {
        getConfig();
    }, []);
    useEffect(() => {
        getDataM();
        getData();
    }, [account]);
    
    const approve = async () => {
        dispatch(connectM());
        await blockchain.smartContract.methods
        .setApprovalForAll(CONFIG.CONTRACT_ADDRESS, true)
        .send({
            to: CONFIG.CONTRACT_ADDRESS,
            from: account
        })
        dispatch(connect())
    }

    const claim = async (tokenId) => {
        setClaiming(true)
        dispatch(connect())
        await blockchain.smartContract.methods.claimAll()
        .send({
            to: CONFIG.CONTRACT_ADDRESS,
            from: account
        })
            .once("error", (err) => {
                console.log(err)
                setClaiming(false)
            })
            .then((Response)=>{
                setClaiming(false)
            })
    }
    const handleChange = (e) =>{
        e.preventDefault();
        setTokenId(parseInt(e.target.value.split(" ")));
    }

    return ( 
        <main className="airdroppage">
            <div>
                <button 
                    className="connect-btn"
                    onClick={(e)=>{
                        !isConnected ?
                        dispatch(connectM())
                        : e.preventDefault()
                    } }
                >
                    {!isConnected ? "Connect Wallet" : account.slice(0, 10)}
                </button>
            </div>
            <h1>Airdrops</h1>
            <h2>Read  the Medium post for all the details on each Airdrop program.</h2>
            <h2>
                {claiming ? "claiming.." : ""}
            </h2>
            <div className="card-container airdropitem">
                <div>
                    {/* <div>
                        <p>Stake Dogface Army</p>
                        <p>Earn AMMO</p>
                    </div> */}
                    <blockquote className="reward"><span>BALANCE</span>
                    {' '}
                    {balance / 10 ** 18}
                    {' '} $AMMO
                    </blockquote>
                    <div>
                        <button 
                            className="btn"
                            onClick={claim}>
                            Claim
                        </button>
                    </div>
                </div>
                
            </div>
        </main>
    );
}
export default Airdrop ;
