const EC =require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey= ec.keyFromPrivate('c92e818a02b1c9fecc3489ff9538e9901e939ba2e575dc6a2ffdf13e3006f741')
const myWalletAddress=myKey.getPublic('hex')


const{BlockChain,Transaction} = require('./blockChain/blockchain')
let theCoin= new BlockChain();



const tx1 = new Transaction(myWalletAddress,'to address public key will be here',10)
tx1.singTransaction(myKey)
theCoin.addTransaction(tx1)


console.log('\n starting the miner...')

theCoin.minePendingTransactions(myWalletAddress)

console.log('\n Balance of Mostafa Adawy is :',theCoin.getBalanceOfAnAddress(myWalletAddress))

console.log('Is Chain Vialed? ',theCoin.isChainVialed())