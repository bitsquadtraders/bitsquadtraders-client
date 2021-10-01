import AuthsRepository from './AuthRepository';

const doSubmit = async (userId, password, oldPassword) => {
  console.log('1__ChangePassword(Bloc)__:', userId, oldPassword, password);

  const data = {
    userId: userId,
    oldPassword: oldPassword,
    password: password
  };
  try {
    const response = await AuthsRepository.authChangePassword(data);
    console.log('__ChangePasswordBloc(res)__', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__ChangePasswordBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

export default doSubmit;
