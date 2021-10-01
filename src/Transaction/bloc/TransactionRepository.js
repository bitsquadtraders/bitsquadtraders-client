import NetworkProvider from '../../networks_provider/Network_Provider';
import NetworkConfig from '../../network_config';

// 1. GET body from input
// 2. Parse through API_CALLS d' config {Network_Config, Network_Provider}
// 3. Export DATA from CALLS

// GET ALL TRANSACTIONS
// const getAllTransactions = async () => {
//   console.log('2__TransactionGetAll(Repo)__:');
//   try {
//     var response = await NetworkConfig({
//       path: NetworkProvider().ALL_TRANSACTIONS,
//       body: '',
//       method: 'get'
//     });
//     console.log('__TransactionGetAllRepo(res)__', response);
//     return response;
//   } catch (e) {
//     console.error('__transactionGetAllRepo(err)__', e.response);
//     throw e;
//   }
// };

// GET ALL TRANSACTIONS PAGINATE
const getAllTransactions = async (count) => {
  console.log('2__TransactionGetAll(Repo)__:', count);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().PAGINATE_ALL_TRANSACTIONS(count),
      body: '',
      method: 'get'
    });
    console.log('__TransactionGetAllRepo(res)__', response);
    return response;
  } catch (e) {
    console.error('__transactionGetAllRepo(err)__', e.response);
    throw e;
  }
};

// GET SINGLE TRANSACTION WALLET
const getOneTransactionWallet = async (walletId) => {
  console.log('2__TransactionGetOneWallet(Repo)__:');
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().GET_ONE_TRANSACTION_WALLET(walletId),
      body: '',
      method: 'get'
    });
    console.log('__TransactionGetOneWalletRepo(res)__', response);
    return response;
  } catch (e) {
    console.error('__transactionGetOneWalletRepo(err)__', e.response);
    throw e;
  }
};

// GET SINGLE TRANSACTION MYCOIN
const getOneTransactionMyCoin = async (coinAddressId) => {
  console.log('2__TransactionGetOneMyCoin(Repo)__:');
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().GET_ONE_TRANSACTION_MYCOIN(coinAddressId),
      body: '',
      method: 'get'
    });
    console.log('__TransactionGetOneMyCoinRepo(res)__', response);
    return response;
  } catch (e) {
    console.error('__transactionGetOneMyCoinRepo(err)__', e.response);
    throw e;
  }
};

// GET ALL MY TRANSACTIONS
const getMyTransactions = async (userId) => {
  console.log('2__TransactionAllMy(Repo)__:', userId);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().GET_MY_TRANSACTIONS(userId),
      body: '',
      method: 'get'
    });
    console.log('__TransactionAllMyRepo(res)__', response);
    return response;
  } catch (e) {
    console.error('__getMyTransRepo(err)__', e.response);
    throw e;
  }
};

// PUT BALANCE
const transactionBalanceUpdate = async (data) => {
  console.log('2__TransUpdateBal(Repo)__:', data);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().UPDATE_BALANCE(data.coinAddressId, data.subtract),
      body: data,
      type: 'text'
    });
    console.log('__TransUpdateBalRepo(res)__', response);
    return response;
  } catch (e) {
    console.error('__TransUpdateBalRepo(err)__', e.response);
    throw e;
  }
};

// PUT PROFIT
const transactionProfitUpdate = async (params) => {
  console.log('2__TransUpdateProfit(Repo)__:', params);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().UPDATE_PROFIT(params.coinAddress),
      body: params,
      type: 'text'
    });
    console.log('__TransUpdateProfitRepo(res)__', response);
    return response;
  } catch (e) {
    console.error('__TransUpdateProfitRepo(err)__', e.response);
    throw e;
  }
};

// PUT STATUS
const transactionStatusUpdate = async (params) => {
  console.log('2__TransUpdateProfit(Repo)__:');
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().UPDATE_TRANSACTION_STATUS(params.walletId),
      body: params,
      type: 'text'
    });
    console.log('__TransUpdateStatusRepo(res)__', response);
    return response;
  } catch (e) {
    console.error('__TransUpdateStatusRepo(err)__', e.response);
    throw e;
  }
};

// DELETE TRANSACTION
const deleteTrans = async (params) => {
  console.log('2__TransDelete(Repo)__:', params);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().DELETE_TRANSACTION(params),
      body: '',
      method: 'delete'
    });
    console.log('__TransDeleteRepo(res)__', response);
    return response;
  } catch (e) {
    console.error('__TransDeleteRepo(err)__', e.response);
    throw e;
  }
};

const TransactionsRepository = {
  getAllTransactions,
  getOneTransactionWallet,
  getOneTransactionMyCoin,
  getMyTransactions,
  transactionBalanceUpdate,
  transactionProfitUpdate,
  transactionStatusUpdate,
  deleteTrans
};

export default TransactionsRepository;
