import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import useLocalStorage from "use-local-storage";
import {useNotification} from 'react-hook-notification';
import Web3 from 'web3';

import BaseRoute from "./router";
import Token from "./abi/Neptune.json";
import store from "./store";

import { config } from './config';
import { setTokenBalance, setCompanyTokenBalance } from './reducers/contractReducer';
function App() {

  const defaultTheme = 'orange';
  const defaultFont = 'font-poppins';
  const [theme, setTheme] = useLocalStorage('theme', defaultTheme);
  const notification = useNotification();
  const [font, setFont] = useLocalStorage('font', defaultFont);
  const colors = ['indigo', 'tradewind', 'monalisa', 'blue', 'cyan', 'green', 'orange', 'blush', 'red'];

  useEffect(() => {
		loadWeb3();
		if (window.web3) loadBlockchainData();
	});
  
  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    if(window.ethereum) {
      const address = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if(address.length !== 0) {
        const personalContract = await new web3.eth.Contract(Token, config.contractAddress);
        personalContract.methods.balanceOf(address[0]).call()
          .then((res) => {
            store.dispatch(setTokenBalance(res));
            window.address = address[0];
            window.personalContract = personalContract;
          });
      }
    }
    // Create a new contract.
    const tokenContract = await new web3.eth.Contract(Token, config.contractAddress);
    tokenContract.methods.balanceOf(config.walletAddress).call()
      .then((res) => {
        store.dispatch(setCompanyTokenBalance(res));
        window.tokenContract = tokenContract;
      })
  }

  async function loadWeb3() {
    // Modern dapp browsers...
		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum);
		}
		// Legacy dapp browsers...
		else if (window.web3) {
			window.web3 = new Web3(window.web3.currentProvider);
		}
		// Non-dapp browsers...
		else {
      notification.warning({
        title: "Attention!",
        text: "Application will not load. Non-Ethereum browser detected. You should consider trying MetaMask!"
      });
		}
  }

  const switchTheme = (index) => {
    const newTheme = colors[index];
    setTheme(newTheme);
  }
  
  const onFontChange = (e, font) => {
    setFont(font);
  }

  return (
    <ChakraProvider>
      <Provider store={store}>
        <Router>
          <div className={"App "+font} data-theme={theme}>
            <button className="btn-switch-theme">
              <i className='material-icons' style={{fontSize: 25}}>color_lens</i>
              <div className="color-panel px-2">
              <div className="setting-theme pb-3 pt-3">
                <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-color-bucket fs-4 me-2 text-primary-color"></i>Template Color Settings</h6>
                <ul className="">
                  <li data-theme="indigo"  onClick={() => switchTheme(0)}><div className="indigo"></div></li>
                  <li data-theme="tradewind" onClick={() => switchTheme(1)}><div className="tradewind"></div></li>
                  <li data-theme="monalisa" onClick={() => switchTheme(2)}><div className="monalisa"></div></li>
                  <li data-theme="blue" onClick={() => switchTheme(3)}><div className="blue"></div></li>
                  <li data-theme="cyan" onClick={() => switchTheme(4)}><div className="cyan"></div></li>
                  <li data-theme="green" onClick={() => switchTheme(5)}><div className="green"></div></li>
                  <li data-theme="orange" onClick={() => switchTheme(6)}><div className="orange"></div></li>
                  <li data-theme="blush" onClick={() => switchTheme(7)}><div className="blush"></div></li>
                  <li data-theme="red" onClick={() => switchTheme(8)}><div className="red"></div></li>
                </ul>
              </div>
              <div className="setting-font">
                  <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-font fs-4 me-2 text-primary-color"></i> Font Settings</h6>
                  <ul className="list-group font_setting mt-1">
                      <li className="list-group-item py-1 px-2">
                          <div className="form-check mb-0">
                              <input className="form-check-input" type="radio" name="font" id="font-poppins" value="font-poppins" onChange={(e) => onFontChange(e, 'font-poppins')} />
                              <label className="form-check-label" htmlFor="font-poppins">
                                  Poppins Google Font
                              </label>
                          </div>
                      </li>
                      <li className="list-group-item py-1 px-2">
                          <div className="form-check mb-0">
                              <input className="form-check-input" type="radio" name="font" id="font-opensans" value="font-opensans" onChange={(e) => onFontChange(e, 'font-opensans')} />
                              <label className="form-check-label" htmlFor="font-opensans">
                                  Open Sans Google Font
                              </label>
                          </div>
                      </li>
                      <li className="list-group-item py-1 px-2">
                          <div className="form-check mb-0">
                              <input className="form-check-input" type="radio" name="font" id="font-montserrat" value="font-montserrat" onChange={(e) => onFontChange(e, 'font-montserrat')} />
                              <label className="form-check-label" htmlFor="font-montserrat">
                                  Montserrat Google Font
                              </label>
                          </div>
                      </li>
                      <li className="list-group-item py-1 px-2">
                          <div className="form-check mb-0">
                              <input className="form-check-input" type="radio" name="font" id="font-Plex" value="font-Plex" onChange={(e) => onFontChange(e, 'font-Plex')} />
                              <label className="form-check-label" htmlFor="font-Plex">
                                  Plex Google Font
                              </label>
                          </div>
                      </li>
                  </ul>
              </div>
              </div>
            </button>
            <BaseRoute />
          </div>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
