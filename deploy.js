const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider( 'owner wrestle person rack unusual erosion unknown final next joke dinosaur forum',
'https://rinkeby.infura.io/v3/033ac9b390f64bca9551ab4fabd0c645');
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('attempting to deploy from account',accounts[0]);
const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
.deploy({ data:bytecode})
.send({ gas: '1000000', from:accounts[0]});


console.log('Contract deployed to', result.options.address);


};
deploy();
