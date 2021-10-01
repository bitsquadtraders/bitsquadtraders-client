// CHECK COIN_PROVIDER FOR THE FUNCTION
// authGetUser || getLogged User

import AuthsRepository from './AuthRepository';

const doSubmit = async (data) => {
  console.log('1__Register(Bloc)__:', data);
  try {
    const response = await AuthsRepository.authRegister(data);
    console.log('__RegisterBloc(res)__', response);

    // SessionManager(response.data);
    if (response.status === 201) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__RegisterBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

export default doSubmit;
