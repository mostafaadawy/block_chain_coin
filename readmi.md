# run using node main
this repo is implementation for simple cryptocurrency and thanks return to [Simply Explained](https://www.youtube.com/playlist?list=PLzvRQMJ9HDiTqZmbtFisdXFxul5k0F-Q4) 
# Building Methodologies
## To begin creating blockchain
    1- it's all begin by creating the chain class called block
    2- the chain array should contain timestamp data previous hah and index
    3- this class has to calculate the hash of the current block
    4- at the very beginning the previous hash is null so we have to put ini value to it after that can be done in the contractor of the second class
    5- second class will be BlockChain class 
    6- this class should contains the constructor that call for the first time the chain or Block class to initiate it 
    7- contains other methods such as createGenesesBlock that is called by the constructor to initiate Block class
    8- get latest block to be used in previous hash
    9- add block that calculate the previous or latest block hash to be saved in previous hash in the new block and then pushed this block to the chain
    10- we call an object and test it by adding some data and logout the result
    11- we add validation method in the block chain class that checks current hash and previous hash 
    12- adding proof of work  that makes the operation takes some time to make it harder to alter the whole chain data
    13- this can be done using nonce that changes the block value and regenerate hash till it match a condition and the difficulty can be defined by the length of this mating substring
## creating cryptocurrency
    14- for converting these classes to work on transactions 
    15- we remove index where the position of the block in the array is enough 
    16 creating transaction class to structure the transaction data
    17- adding data object to transaction 
    18- adding pending transaction to emulate the real world where in real we should pend transaction tell we finish previous proof of work
    19 - in real we can not save all transaction and data minors select which will be and which not but for our educational purpose we save all
    20- replacing add block by minePendingTransaction that calls new Block with the pended blocks
    21-create a method that check the balance of an address
    22- the objective is to determine the amount for or to and calculate the balance for the the 2 addresses
# test our code
    23-we call an object from our blockchain cryptocurrency
    24-create 2 transaction from to 
    25-mine that pended transactions
# till now any one can make any transaction so how to prevent that by sining transaction block chain
    26-to prevent spending coins that aren't yours
    27- adding key generator with elliptic curve package to fet private and public keys
    