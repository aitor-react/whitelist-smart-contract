require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
  },
};