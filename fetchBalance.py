import os
from web3 import Web3
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

# 从环境变量获取Infura API密钥
infura_api_key = os.getenv('INFURA_API_KEY')

if not infura_api_key:
    print('INFURA_API_KEY is missing. Please add it to your environment variables.')
    exit(1)

# 创建Web3实例
# web3 = Web3(Web3.HTTPProvider(f'https://linea-mainnet.infura.io/v3/{infura_api_key}', 
#                             #   timeout=10000
#                               ))
web3 = Web3(Web3.HTTPProvider(f'https://mainnet.infura.io/v3/{infura_api_key}', 
                            #   timeout=10000
                              ))
# 检查与Infura节点的连接状态
if web3.is_connected():
    print('Connected to Infura')


    # 获取所有账户
    all_accounts = web3.eth.default_account
    # print(all_accounts)
    # 遍历所有账户
    for account in all_accounts:
        # 获取账户余额（以wei为单位）
        balance_wei = web3.eth.getBalance(account)

        # 转换为以太币
        balance_eth = web3.fromWei(balance_wei, 'ether')

        # 如果余额超过1000ETH，输出账户信息
        if balance_eth > 1000:
            print(f"Account: {account}, Balance: {balance_eth} ETH")

else:
    print('Unable to connect to Infura')
