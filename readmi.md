# run using node main
# Building Methodologies
## To begin creating blockchain
    1- it's all begin by creating the chain class called block
    2- the chain array should contain timestamp data previous hah and index
    3- this class has to calculate the hash of the current block
    4- at the very beginning the previous hash is null so we have to put ini value to it after that can be done in the contractor of the second class
    5- second class will be BlockChain class 
    6- this class should contains the contructor that call for the first time the chain or Block class to initiat it 
    7- contains other methods such as createGeneseBlock that is called by the contructor to ininit Block class
    8- get latest block to be used in previous hash
    9- addblock that calculate the previous or latest block hash to be saved in previous hash in the new block and then pushed this block to the chain
    10- we call an object and test it by adding some data and loggout the result
    
    