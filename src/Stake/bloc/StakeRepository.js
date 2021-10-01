import NetworkProvider from '../../networks_provider/Network_Provider';
import NetworkConfig from '../../network_config';

// 1. GET body from input
// 2. Parse through API_CALLS d' config {Network_Config, Network_Provider}
// 3. Export DATA from CALLS

// POST STAKE
const createStake = async (params) => {
  console.log('2__StakeCreate(Repo)__:', params);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().STAKE,
      body: params,
      method: 'post'
    });
    console.log('__StakeCreate(Repo)__', response);
    return response;
  } catch (e) {
    console.error('__createStakeRepo(err)__', e.response);
    throw e;
  }
};

// GET ALL STAKE
const getAllStake = async () => {
  console.log('2__StakeGetAll(Repo)__:');
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().GET_STAKE,
      body: '',
      method: 'get'
    });
    console.log('__StakeGetAll(Repo)__', response);
    return response;
  } catch (e) {
    console.error('__getAllStakeRepo(err)__', e.response);
    throw e;
  }
};

const StakesRepository = {
  createStake,
  getAllStake
};

export default StakesRepository;
