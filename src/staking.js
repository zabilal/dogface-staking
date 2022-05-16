import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectM } from "./redux/blockchain/blockchainActions";
import {
  connect,
  isConnected,
} from "./redux/stakeBlockchain/blockchainActions";
import { fetchData, balance, rewards } from "./redux/stakeData/dataActions";
import { fetchDataM, hasApproved } from "./redux/data/dataActions2";

import "./styles/stake.css";

const Staking = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("STAKE");
  const [claiming, setClaiming] = useState(false);
  const [staking, setStaking] = useState(false);
  const [unstaking, setUnstaking] = useState(false);
  const [hasStaked, setHasStaked] = useState(false);
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
  useEffect(() => {
    dispatch(connectM());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      hasApproved ? dispatch(connect()) : dispatch(connectM());
    }, 3000);
  }, []);
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
      dispatch(fetchDataM());
    }
  };
  const getData = () => {
    if (account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData());
    }
  };
  useEffect(() => {
    getConfig();
  }, []);
  useEffect(() => {
    getDataM();
    getData();
  }, [account]);

  const stake = (tokenId) => {
    setStaking(true);
    setFeedback("BUSY");
    dispatch(connect());
    blockchain.smartContract.methods
      .deposit([tokenId])
      .send({
        to: CONFIG.CONTRACT_ADDRESS,
        from: account,
      })
      .once("error", (err) => {
        console.log(err);
        setStaking(false);
      })
      .then((Response) => {
        setStaking(false);
      });

    setFeedback("STAKE");
  };

  const unStake = async (tokenId) => {
    setUnstaking(true);
    dispatch(connect());
    blockchain.smartContract.methods
      .unstakeByIds([tokenId])
      .send({
        to: CONFIG.CONTRACT_ADDRESS,
        from: account,
      })
      .once("error", (err) => {
        console.log(err);
        setUnstaking(false);
      })
      .then((Response) => {
        setUnstaking(false);
      });
  };

  const unstakeAll = () => {
    setUnstaking(true);
    dispatch(connect());
    blockchain.smartContract.methods
      .unstakeAll()
      .send({
        to: CONFIG.CONTRACT_ADDRESS,
        from: account,
      })
      .once("error", (err) => {
        console.log(err);
        setUnstaking(false);
      })
      .then((Response) => {
        setUnstaking(false);
      });
  };

  const approve = async () => {
    dispatch(connectM());
    await blockchain.smartContract.methods
      .setApprovalForAll(CONFIG.CONTRACT_ADDRESS, true)
      .send({
        to: CONFIG.CONTRACT_ADDRESS,
        from: account,
      });
    dispatch(connect());
  };

  const claim = async (tokenId) => {
    setClaiming(true);
    dispatch(connect());
    await blockchain.smartContract.methods
      .withdraw()
      .send({
        to: CONFIG.CONTRACT_ADDRESS,
        from: account,
      })
      .once("error", (err) => {
        console.log(err);
        setClaiming(false);
      })
      .then((Response) => {
        setClaiming(false);
      });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setTokenId(parseInt(e.target.value.split(" ")));
  };

  return (
    <main className="stake-app">
      <div>
        <button
          className="connect-btn"
          onClick={(e) => {
            !isConnected ? dispatch(connectM()) : e.preventDefault();
          }}
        >
          {!isConnected ? "Connect Wallet" : account.slice(0, 10)}
        </button>
      </div>
      <h1>STAKE</h1>
      <h2>
        {staking ? "staking.." : ""}
        {unstaking ? "unstaking.." : ""}
        {claiming ? "claiming.." : ""}
      </h2>
      <div className="overall-cc">
        <div className="card-container">
          <div>
            <div className="titles">
              <h2>Stake LPs</h2>
              <p>Earn rewards by staking LPs</p>
            </div>
            <blockquote className="totalcounts">
              {" "}
              {/* {balance / 10 ** 18} */} 0 LP Tokens
            </blockquote>
            <form className="form" onChange={handleChange}>
              <button
                className="btn stake-btn"
                onClick={
                  hasApproved
                    ? (e) => {
                        e.preventDefault();
                        stake(tokenId);
                      }
                    : (e) => {
                        e.preventDefault();
                        approve(tokenId);
                      }
                }
              >
                {hasApproved ? "STAKE" : "APPROVE"}
              </button>
            </form>
          </div>
        </div>
        <div className="card-container">
          <div>
            <div className="titles">
              <h2>Unstake LPs</h2>
              <p>Withdraw your LP tokens from staking</p>
            </div>
            <blockquote className="totalcounts">
              {" "}
              {/* {balance / 10 ** 18} */} 0 LP Staked
            </blockquote>
            <button className="btn mb-5" onClick={unstakeAll}>
              Unstake LP
            </button>
          </div>
        </div>
        <div className="card-container">
          <div>
            <div className="titles">
              <h2>Claim Liquidity Rewards</h2>
              <p>Claim Rewards</p>
            </div>
            <blockquote className="totalcounts">
              {" "}
              {/* {balance / 10 ** 18} */} 0 $AMMO
            </blockquote>
            <button className="btn mb-5" onClick={claim}>
              Claim LP Rewards
            </button>
          </div>
        </div>
        <div className="card-container">
          <div>
            <div className="titles">
              <h2>Stake Your NFTs</h2>
              <p>Earn rewards by staking</p>
            </div>
            <blockquote className="totalcounts">
              {" "}
              {/* {balance / 10 ** 18} */} 0 NFTs
            </blockquote>
            <form className="form" onChange={handleChange}>
              <button
                className="btn stake-btn"
                onClick={
                  hasApproved
                    ? (e) => {
                        e.preventDefault();
                        stake(tokenId);
                      }
                    : (e) => {
                        e.preventDefault();
                        approve(tokenId);
                      }
                }
              >
                {hasApproved ? "STAKE" : "APPROVE"}
              </button>
            </form>
          </div>
        </div>
        <div className="card-container">
          <div>
            <div className="titles">
              <h2>Unstake</h2>
              <p>Unstake your staked NFTs</p>
            </div>
            <blockquote className="totalcounts">
              {" "}
              {/* {balance / 10 ** 18} */} 0 NFTs staked
            </blockquote>
            <button className="btn mb-5" onClick={unstakeAll}>
              UNSTAKE ALL
            </button>
          </div>
        </div>
        <div className="card-container">
          <div>
            <div className="titles">
              <h2>Claim Rewards</h2>
              <p>0 NFT(s) staked</p>
            </div>
            <blockquote className="totalcounts">
              {" "}
              {/* {balance / 10 ** 18} */} 0 $AMMO
            </blockquote>
            <button className="btn mb-5" onClick={claim}>
              CLAIM
            </button>
          </div>
        </div>
      </div>

      <div className="footersection">
        {/* <img src="logo.png" alt="logo" className="footerlogo" /> */}
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
        <p style={{ color: "#ffffff" }}>
          ©2022 DogFace Army. All rights reserved.
        </p>
      </div>
    </main>
  );
};
export default Staking;
