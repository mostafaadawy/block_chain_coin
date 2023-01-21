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
    28- using secp  elliptic curve algorithm the basis for bitcoin wallets
    29-generating the key pair and extracting the private and public
    30- editing script to run key generator and generate as follows
```sh
Private key:  c92e818a02b1c9fecc3489ff9538e9901e939ba2e575dc6a2ffdf13e3006f741

Public key:  04e55c411ce8a51919db5eb2f6bab532f5bda3e95e56c9df8edd7089fa1d907bad78620f82364710513fbf49a29ad6b7009e55ccca1a5273ce491c4fb31c9e6f92
```
    31- modifying our blockchain classes
    32- in transaction we need to check the public key if not same as the fromaddress throw error you cannot sign transaction for other wallets
    33- also we need to sign these transaction
    34- we sign the hash of transaction instead of transaction to check integrity
    35- sining with our private key 
    36- create check isVailed check there is no signature throw an error except for null address where we reserve this for reward transaction
    37- we also check if the transaction public key is rhe key that sign the transaction or not by converting public key string to object format for elliptic curve
    38- verify that signature which comes from hashed value of transaction and public key or from address is true where we can remove the effect of the signature if multiplied by the same key so id returned the same first input argument transaction hash it returns true and if not returns false

## modifying block class
    39- addingVialedTransaction method can verify all transaction where it loops all transaction to check using the transaction class method isVialed to filter which is not
    40- 
