const { table } = require('console');
const SHA256 = require('crypto-js/sha256')
const EC =require('elliptic').ec;
const ec = new EC('secp256k1');
class Transaction{
    constructor(fromAddress, toAddress, amount){
        this.fromAddress=fromAddress
        this.toAddress=toAddress
        this.amount=amount
    }
    calculateHash(){
        return SHA256(this.fromAddress+this.toAddress+this.amount).toString();
    }
    singTransaction(siningKey){
        if(siningKey.publickey !==this.fromAddress){
            throw new Error('You cannot sign this transaction for other wallets')
        }
        const hashTX= this.calculateHash();
        const sig= siningKey.sign(hashTX,'base64')
        this.signature= sig.toDER('hex')
    }
    isVialed(){
        if(this.fromAddress===null) return true
        if(!this.signature||this.singTransaction.length===0){
            throw Error('There is no signature for this transaction')
        }

        const publicKey =ec.keyFromPublic(this.fromAddress,'hex') //convert public key string to object format for elliptic curve
        return publicKey.verify(this.calculateHash,this.signature) // verify that signature which comes from hashed value of transaction and public key or from address is true where we can remove the effect of the signature if multiplied by the same key so id returned the same first input argument transaction hash it returns true and if not returns false
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
        return SHA256(this.index+this.previousHash+this.timestamp+JSON.stringify(this.transactions)+this.nonce).toString();
    }
    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty+1).join("0")){
            this.nonce++
            this.hash= this.calculateHash();
        }
        console.log('Block Mind: ', this.hash)
    }
    addingVialedTransaction(){
        for(const tx in this.transactions){
            if(!tx.isVialed()){
                return false
            }
        }
        return true;
    }
}
class BlockChain{
    constructor(){
        this.difficulty=2
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

    minePendingTransactions(miningRewardAddress){
        let block = new Block(Date.now(),this.pendingTransactions) // note in reality we can not add all transactions we have to select 
                                                                    //which we add and which is not so for this educational purpose we ignore that  at moment 
        block.mineBlock(this.difficulty)
        console.log('Block Successfully mined!')
        this.chain.push(block)
        this.pendingTransactions=[
            new Transaction(null, miningRewardAddress,this.miningReward)
        ]
    }
    createTransaction(transaction){
        this.pendingTransactions.push(transaction)
    }
    getBalanceOfAnAddress(address){
        let balance=0
        for(const block of this.chain){
            for(const trans of block.transactions){
                if(trans.fromAddress===address){
                    balance-= trans.amount
                }
                if(trans.toAddress===address){
                    balance+=trans.amount
                }
            }
        }
        return balance
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
module.exports.BlockChain=BlockChain;
module.exports.Transaction=Transaction;
