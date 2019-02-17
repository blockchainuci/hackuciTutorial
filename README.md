# hackuciTutorial - ethereum dapp
A simple ethereum blockchain application using of solidity, smart contracts, and the truffle framework for introductory blockchain development.

## INSTALLATION:

1. Node environment:
    
        brew install node

2. Solc Compiler: Ethereum smart contracts are compiled with this.
    
        npm install -g solc

3. Go Ethereum (geth): a multipurpose command line tool that runs a full Ethereum node implemented in Go.
    
	1. Brew Install
        
        brew tap ethereum/ethereum
        brew install ethereum
    
    2. [Go Ethereum website](https://geth.ethereum.org/downloads/)

4. Truffle framework: Truffle is development environment and test framework for ethereum. You can install truffle using npm.
    
        npm install -g truffle

5. Ganache: creates a virtual Ethereum blockchain, and it generates some fake accounts that we will use during development
    
    1. ganache-cli

        npm install -g ganache-cli

    2. Ganache client

    	https://truffleframework.com/ganache

6. Install dependencies 

        npm install


## HowTo Build the Project from Scratch:

1. Create a new directory for your project


2. Install the above packages


3. Run ganache
	
		ganache-cli
	or start your Ganache application


4. Generate a new truffle project:
		
		truffle init
		truffle compile
		truffle migrate


5. Create the Counter solidity smart contract
		
		create a Counter.sol file
		modify 1_initial_migration.js file to include Counter contract deploy.


6. Create tests for your Counter contract
		
		make a ./test/test.js file
		add Counter contract functionality tests to test.js 


7. Run tests

		truffle test


## Relevant links:

[A great guide to all things blockchain development!](https://medium.freecodecamp.org/the-authoritative-guide-to-blockchain-development-855ab65b58bc)

[A tutorial explaining the simple counter contract we've developed here today!](https://medium.com/coinmonks/getting-started-with-ethereum-blockchain-development-part-1-d6543b441bea)
        
[A tutorial building on the counter contract into a Web3 application!](http://demystifyblockchain.com/2018/06/29/getting-started-with-ethereum-blockchain-development/)
