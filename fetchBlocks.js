// Import the dotenv library
require('dotenv').config();

// const Web3 = require('web3');
const { Web3 } = require('web3');

const infuraApiKey = process.env.INFURA_API_KEY;

if (!infuraApiKey) {
  console.error('INFURA_API_KEY is missing. Please add it to your .env file.');
  process.exit(1);
}

const web3 = new Web3({
    provider: `https://linea-mainnet.infura.io/v3/${infuraApiKey}`,
    timeout: 10000,
});
  

// 获取最新的10个区块
async function fetchBlocks() {
    try {
      const latestBlockNumber = await web3.eth.getBlockNumber();
      const startBlockNumber = BigInt(latestBlockNumber) - BigInt(9);
  
      for (let i = startBlockNumber; i <= BigInt(latestBlockNumber); i++) {
        const block = await web3.eth.getBlock(Number(i)); // Convert BigInt back to Number
        console.log(`Block #${block.number}: ${block.hash}`);
      }
    } catch (error) {
      console.error('Error fetching blocks:', error);
    }
  }
  
  // 执行函数获取区块数据
  fetchBlocks();
