import NetworkProvider from '../../networks_provider/Network_Provider';
import NetworkConfig from '../../network_config';

// 1. GET body from input
// 2. Parse through API_CALLS d' config {Network_Config, Network_Provider}
// 3. Export DATA from CALLS

// POST LOGIN
const authLogin = async (params) => {
  console.log('2__login(Repo)__:', params);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().LOGIN_URL,
      body: params,
      method: 'post'
    });
    console.log('__loginRepo(res)__', response);
    return response;
  } catch (e) {
    console.error('__loginRepo(err)__', e.response);
    throw e;
  }
};

// GET CURRENTLY LOGGED USER AFTER DECODING JWT
const authGetUser = async () => {
  console.log('secondly');
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().GET_SINGLE_USER,
      body: '',
      method: 'get'
    });
    // console.log(response);
    return response;
  } catch (e) {
    console.error(e);
  }
};

// POST REGISTER
const authRegister = async (params) => {
  console.log('2__Register(Repo)__', params);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().REGISTER_URL,
      body: params,
      method: 'post'
    });
    console.log('__RegisterRepo(res)__', response);
    return response;
  } catch (e) {
    console.error('__RegisterRepo(err)__', e.response);
    throw e;
  }
};

// POST RESET PASSWORD
const authResetPassword = async (params) => {
  console.log('2__ResetPassword(Repo)__', params);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().RESET_PASSWORD_URL,
      body: params,
      method: 'post'
    });
    console.log('__ResetPasswordRepo(res)__', response);
    return response;
  } catch (e) {
    console.error('__ResetPasswordRepo(err)__', e.response);
    throw e;
  }
};

// PUT CHANGE PASSWORD
const authChangePassword = async (data) => {
  console.log('2__ChangePassword(Repo)__', data);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().CHANGE_PASSWORD_URL(data.userId),
      body: data,
      type: 'text'
    });
    console.log('__ChangePassword(res)__', response);
    return response;
  } catch (e) {
    console.error('__ChangePassword(err)__', e.response);
    throw e;
  }
};

const AuthsRepository = {
  authLogin,
  authGetUser,
  authRegister,
  authResetPassword,
  authChangePassword
};

export default AuthsRepository;
