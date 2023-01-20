const SHA256 = require('crypto-js/sha256')

class Transactions{
    constructor(fromAddress, toAddress, amount){
        this.fromAddress=fromAddress
        this.toAddress=toAddress
        this.amount=amount
    }
}
class Block{
    constructor(timestamp, transactions, previousHash){
        this.timestamp=timestamp;
        this.transactions=transactions;
        this.previousHash=previousHash;
        this.hash=this.calculateHash();
        this.nonce=0
    }
    calculateHash(){
        return SHA256(this.index+this.previousHash+this.timestamp+JSON.stringify(this.data)+this.nonce).toString();
    }
    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty+1).join("0")){
            this.nonce++
            this.hash= this.calculateHash();
        }
        console.log('Block Mind: ', this.hash)
    }
}
class BlockChain{
    constructor(){
        this.difficulty=4
        this.chain=[this.createGenesisBlock()];
        this.pendingTransactions=[] // contains transactions till the previous ones finishes proof of work
        this.miningReward=100; // reward for the mining
    }

    createGenesisBlock(){
        return new Block("01/01/2023","Mostafa Adawy","0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }

    minePendingTransaction(miningRewardAddress){
        let block = new Block(Date.now(),this.pendingTransactions) // note in reality we can not add all transactions we have to select 
                                                                    //which we add and which is not so for this educational purpose we ignore that  at moment 
        block.mineBlock(this.difficulty)
        console.log('Block Successfully mined')
        this.chain.push(block)
        this.pendingTransactions=[
            new Transactions(null, miningRewardAddress,this.miningReward)
        ]
    }
    isChainVialed(){
        for(let i=1; i<this.chain.length;i++){
            const currentBlock = this.chain[i]
            const previousBlock=this.chain[i-1]
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
            return true
        }

    }
}
let theCoin= new BlockChain();
