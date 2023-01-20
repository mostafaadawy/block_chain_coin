const SHA256 = require('crypto-js/sha256')
class Block{
    constructor(index, timestamp, data, previousHash){
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
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
    }

    createGenesisBlock(){
        return new Block(0,"01/01/2023","Mostafa Adawy","0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }

    addBlock(newBlock){
        newBlock.previousHash=this.getLatestBlock()?this.getLatestBlock().hash:"";
        // newBlock.hash=newBlock.calculateHash();
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
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

//second video
console.log('Mining Block 1 ...')
theCoin.addBlock(new Block(1,"01/01/2023",{amount:1}));
console.log('Mining Block 2 ...')
theCoin.addBlock(new Block(2,"01/01/2023",{amount:20}));
console.log('Mining Block 3 ...')
theCoin.addBlock(new Block(3,"01/01/2023",{amount:30}));
console.log('Mining Block 4 ...')
theCoin.addBlock(new Block(4,"01/01/2023",{amount:400}));

//first video comments
// console.log(JSON.stringify(theCoin,null,4))
// console.log('Is blockchain vialed? ', theCoin.isChainVialed())
// theCoin.chain[1].data={amount:100}
// console.log('Is blockchain vialed? ', theCoin.isChainVialed())