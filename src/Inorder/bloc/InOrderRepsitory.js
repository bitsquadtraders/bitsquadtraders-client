import NetworkProvider from '../../networks_provider/Network_Provider';
import NetworkConfig from '../../network_config';

// 1. GET body from input
// 2. Parse through API_CALLS d' config {Network_Config, Network_Provider}
// 3. Export DATA from CALLS

// POST COIN WALLET
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
    console.error(e);
  }
};

const InOrdersRepository = {
  handleMyCoinWalletCreate
};

export default InOrdersRepository;
