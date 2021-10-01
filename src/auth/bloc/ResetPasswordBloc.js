import AuthsRepository from './AuthRepository';

const doSubmit = async (email) => {
  console.log('1__resetPassword(Bloc)__:', email);

  const data = {
    email: email
  };
  try {
    const response = await AuthsRepository.authResetPassword(data);
    console.log('__resetPasswordBloc(res)__', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__resetPasswordBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

export default doSubmit;
