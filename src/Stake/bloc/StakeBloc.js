import StakesRepository from './StakeRepository';

// CREATE STAKE
const createStake = async (params) => {
  console.log('1__Stakebody(bloc)__:', params);

  try {
    const response = await StakesRepository.createStake(params);
    console.log(response);

    if (response.status === 201) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__createStakeBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

const getAllStake = async () => {
  console.log('1__StakeGetAllbody(bloc)__:');

  try {
    const response = await StakesRepository.getAllStake();
    console.log('__StakeGetAllbody(bloc)__', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__getAllStakeBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};
const StakeBloc = {
  createStake,
  getAllStake
};
export default StakeBloc;
