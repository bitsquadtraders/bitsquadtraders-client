import ProfileRepository from './ProfileRepository';

// CREATE IMAGE LINK
const createImg = async (data) => {
  console.log('profileCreateImg firstly data :');

  try {
    const response = await ProfileRepository.handleImgCreate(data);
    console.log('1st post img', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__profileBloc(err)__', e.response);
    throw e;
  }
};

// UPDATE || APPEND IMAGE LINK
const updateImg = async (data) => {
  console.log('profileUpdateImg firstly data :');

  try {
    const response = await ProfileRepository.handleImgUpdate(data);
    console.log('2st put img', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__profileBloc(err)__', e.response);
    throw e;
  }
};

// UPDATE TEXT
const updateText = async (data) => {
  console.log('profileUpdateText firstly data :', data);

  try {
    const response = await ProfileRepository.handleTextUpdate(data);
    console.log(response);

    if (response.status === 200) {
      return true;
    }
  } catch (e) {
    console.log('__profileBloc(err)__', e.response);
    throw e;
  }
};

// EXPORT
const CredentialsBloc = {
  createImg,
  updateImg,
  updateText
};

// export { createImg, updateImg updateText };
export default CredentialsBloc;
