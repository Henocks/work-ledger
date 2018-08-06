import React, { Component } from 'react';
import Web3 from "web3";
import TransportU2F from "@ledgerhq/hw-transport-u2f";
import createLedgerSubprovider from "@ledgerhq/web3-subprovider";
import ProviderEngine from "web3-provider-engine";
import FetchSubprovider from "web3-provider-engine/subproviders/fetch";

const rpcUrl = process.env.REACT_APP_NETWORK_URL || "http://192.168.0.65:8545";
const networkId = parseInt(process.env.REACT_APP_NETWORK_ID || "1337", 10);

class App extends Component {
  render() {

      const engine = new ProviderEngine();
      const getTransport = () => TransportU2F.create();
      const ledger = createLedgerSubprovider(getTransport, {
        networkId,
        accountsLength: 5
      });
      engine.addProvider(ledger);
      engine.addProvider(new FetchSubprovider({ rpcUrl }));
      engine.start();

      var web3 = new Web3(engine);

      console.log(ledger);
      /*
      ledger.getAccounts().then((result) => {
        console.log(result);
      });
      */
      web3.eth.getAccounts()
      .then;
      //web3.eth.getBalance(console.log);
    
    return (
      <div className="App">
        <h1>
          HELLO
        </h1>
      </div>
    );
  }
}

export default App;
