import NetworkProvider from '../../networks_provider/Network_Provider';
import NetworkConfig from '../../network_config';

// GET singleCoin transaction
// Param ( /mycoins/mine/userId/coinId )
const handleTransaction = async (userId, coinId) => {
  console.log(userId, coinId);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().FETCH_COIN_ID(userId, coinId),
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {
    console.log(e.response.data.error);
    throw new Error(e.response.data.error);
  }
};

// GET Single Coin details
// Param ( /coins/coinId )
const handleWallet = async (coinId) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().FETCH_MYCOIN(coinId),
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {
    console.log(e.response.data.error);
    throw new Error(e.response.data.error);
  }
};

// GET myCoin single details
// Param ( /mycoins/walletId )
const handleMyWallet = async (walletId) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().FETCH_MINE(walletId),
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {
    console.log(e.response.data.error);
    throw new Error(e.response.data.error);
  }
};

// POST NEW MYCOIN WALLET
const handleMyCoinWalletCreate = async (params) => {
  console.log('secondly', params);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().CREATE_MYCOIN_WALLET,
      body: params,
      method: 'post'
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log('1____walletRepo_error(err)____', e.response.data);
    throw e;
  }
};

const WalletsRepository = {
  handleTransaction,
  handleWallet,
  handleMyWallet,
  handleMyCoinWalletCreate
};
export default WalletsRepository;
