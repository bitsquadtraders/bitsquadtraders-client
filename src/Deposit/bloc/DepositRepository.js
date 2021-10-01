import NetworkProvider from '../../networks_provider/Network_Provider';
import NetworkConfig from '../../network_config';

// 1. GET body from input
// 2. Parse through API_CALLS d' config {Network_Config, Network_Provider}
// 3. Export DATA from CALLS

// POST DEPOSIT
const createDeposit = async (params) => {
  console.log('2__DepositCreate(Repo)__:', params);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().DEPOSIT_TRANSACTION,
      body: params,
      method: 'post'
    });
    console.log('__createDepositRepo(res)__', response);
    return response;
  } catch (e) {
    console.error('__createDepositRepo(err)__', e.response);
    throw e;
  }
};

// GET OLD EXCHANGE
// const getExchange = async (params1, params2) => {
//   console.log('2__getExchange(repo)__');
//   try {
//     var response = NetworkProvider().EXCHANGE(params1, params2);
//     console.log(response);
//     return response;
//   } catch (e) {
//     console.error(e);
//   }
// };

const getExchange = async (data) => {
  console.log('2__getExchange(repo)__', data);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().EXCHANGE(data.cryptoAbbr, data.amount),
      body: '',
      type: 'getex'
    });
    console.log('__getExchange(repo)__', response);
    return response;
  } catch (e) {
    console.error('__getExchange(err)__', e.response);
  }
};

const DepositsRepository = {
  createDeposit,
  getExchange
};
export default DepositsRepository;
