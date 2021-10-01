import SessionManager from '../../session_manager/Session_Manager';
import AuthsRepository from './AuthRepository';

const doSubmit = async (data) => {
  console.log('1__login(Bloc)__:', data);
  try {
    const response = await AuthsRepository.authLogin(data);
    console.log('__loginBloc(res)__', response);

    SessionManager(response.data);
    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__loginBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

export default doSubmit;
