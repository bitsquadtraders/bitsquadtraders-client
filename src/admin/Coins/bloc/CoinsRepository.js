import NetworkProvider from '../../../networks_provider/Network_Provider';
import NetworkConfig from '../../../network_config';

// 1. GET body from input
// 2. Parse through API_CALLS d' config {Network_Config, Network_Provider}
// 3. Export DATA from CALLS

// POST IMAGE
const handleImgCreate = async (params) => {
  console.log('secondly', params);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().UPLOAD_IMAGE,
      body: params,
      type: 'file'
    });
    console.log(response);
    return response;
  } catch (e) {
    console.error(e);
  }
};

// PUT TEXT
const handleTextUpdate = async (params) => {
  console.log('secondly', params);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().UPDATE_COIN(params.coinId),
      body: params,
      type: 'text'
    });
    console.log(response);
    return response;
  } catch (e) {
    console.error(e);
  }
};

// POST TEXT
const handleTextCreate = async (params) => {
  console.log('secondly', params);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().CREATE_COIN,
      body: params,
      method: 'post'
    });
    console.log(response);
    return response;
  } catch (e) {
    console.error(e);
  }
};

// DELETE TEXT
const handleTextDelete = async (data) => {
  console.log('secondly', data);

  try {
    var response = await NetworkConfig({
      path: NetworkProvider().DELETE_COIN(data.coinId),
      body: data,
      method: 'delete'
    });
    console.log(response);
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

// GET SINGLE COIN
const handleSingleGet = async (coinId) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().UPDATE_COIN(coinId),
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {
    console.log(e.response.data.error);
    throw new Error(e.response.data.error);
  }
};

// GET ALL(10) COIN
const handleAllGet = async () => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().FETCH_COIN,
      body: '',
      method: 'get'
    });

    return response;
  } catch (e) {
    console.error(e);
  }
};

const CoinsRepository = {
  // handleImgUpdate,
  handleTextUpdate,
  handleImgCreate,
  handleTextCreate,
  handleTextDelete,
  handleSingleGet,
  handleAllGet
};

export default CoinsRepository;
