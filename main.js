const{BlockChain,Transaction} = require('./blockChain/blockchain')
let theCoin= new BlockChain();
theCoin.createTransaction(new Transaction('address1','address2',100))
theCoin.createTransaction(new Transaction('address2','address1',50))
console.log('\n starting the miner...')
theCoin.minePendingTransactions('adawy-address')
console.log('\n Balance of adawy is ',theCoin.getBalanceOfAnAddress('adawy-address'))

console.log('\n starting the miner again ...')
theCoin.minePendingTransactions('adawy-address')
console.log('\n Balance of adawy is ',theCoin.getBalanceOfAnAddress('adawy-address'))

console.log('\n starting the miner again...')
theCoin.minePendingTransactions('adawy-address')
console.log('\n Balance of adawy is ',theCoin.getBalanceOfAnAddress('adawy-address'))
