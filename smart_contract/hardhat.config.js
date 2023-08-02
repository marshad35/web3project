// https://eth-sepolia.g.alchemy.com/v2/qqKSauqH--dUmJi7bEvpduux9E-WSVxJ

const { defaultAccounts } = require('ethereum-waffle');


require('@nomiclabs/hardhat-waffle');


module.exports = {

  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/qqKSauqH--dUmJi7bEvpduux9E-WSVxJ',
      accounts:['2286348360eff76ef7530f5c9a0abc5364585da5a37542b4b9134025a77239de']
    }
  }

}