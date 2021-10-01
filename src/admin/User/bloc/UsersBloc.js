import UsersRepository from './UsersRepository';

// GET ALL USERS
const allUsers = async () => {
  console.log('usersBloc firstly data :');

  try {
    const response = await UsersRepository.getAllUsers();
    console.log('users from bloc', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {}
};

// GET ALL USERS
const oneUser = async () => {
  console.log('usersBloc firstly data :');

  try {
    const response = await UsersRepository.getOneUser();
    console.log('users from bloc', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {}
};

// EXPORT
const UsersBloc = {
  allUsers,
  oneUser
};

// export { createImg, updateImg updateText };
export default UsersBloc;
