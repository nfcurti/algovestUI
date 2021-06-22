import React from "react";
import IMG_LOGO from "../assets/logo512.jpeg";
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider';


export default class Header extends React.Component {
  state = {account: 'Connect'}

  testGetPrice = async () => {
    const provider = await detectEthereumProvider()
		 
		if (provider) {
		 
		  console.log('Ethereum successfully detected!')
		  const chainId = await provider.request({
		    method: 'eth_chainId'
		  })

		  const web3 = new Web3(Web3.givenProvider || 'http://localhost:8080')
		  const network = await web3.eth.net.getNetworkType();
		  console.log(network) // should give you main if you're connected to the main network via metamask...
	      const accounts = await web3.eth.getAccounts()
	      console.log(accounts[0])
	      this.setState({account:accounts[0]})
		} else {

		  console.log('Please install MetaMask!')
		}
      }

    render() {return (
    
            <nav className="navbar navbar-light ">
    		  <a className="navbar-brand" href="#"><img className="logo" src={IMG_LOGO} /></a>
    		  <button onClick={this.testGetPrice} type="button" class="connect_button">{this.state.account}</button>
    		</nav>
        )}
}