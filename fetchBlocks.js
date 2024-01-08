// Import the dotenv library
require('dotenv').config();

const Web3 = require('web3');


// Access the INFURA_API_KEY using process.env
const infuraApiKey = process.env.INFURA_API_KEY;

// Check if INFURA_API_KEY is available
if (!infuraApiKey) {
    console.error('INFURA_API_KEY is missing. Please add it to your .env file.');
    process.exit(1);
  }
  
// Connect to Infura using HTTP provider
const web3 = new Web3(`https://mainnet.infura.io/v3/${infuraApiKey}`);
  

// 获取最新的10个区块
async function fetchBlocks() {
  try {
    const latestBlockNumber = await web3.eth.getBlockNumber();
    const startBlockNumber = latestBlockNumber - 9;

    for (let i = startBlockNumber; i <= latestBlockNumber; i++) {
      const block = await web3.eth.getBlock(i);
      console.log(`Block #${block.number}: ${block.hash}`);
    }
  } catch (error) {
    console.error('Error fetching blocks:', error);
  }
}

// 执行函数获取区块数据
fetchBlocks();
