import { ethers } from 'ethers';

export const connectWallet = async () => {

  if (typeof window.ethereum !== 'undefined' && typeof window.ethereum != 'undefined') {
    const provider = new ethers.BrowserProvider(window.ethereum);
    try {
      const accounts = await provider.send('eth_requestAccounts', []);
      const selectedAccount = accounts[0];
      const balance = await provider.getBalance(selectedAccount)
      const balanceInEther = ethers.formatEther(balance);
      const block = await provider.getBlockNumber()

      const transactionCount = await provider.getTransactionCount(selectedAccount)

      const walletData =
      {
        block,
        balance,
        balanceInEther,
        selectedAccount,
        transactionCount
      }
      return walletData;
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      throw error;
    }
  } else {
    throw new Error('Wallet provider is not available.');
  }
}