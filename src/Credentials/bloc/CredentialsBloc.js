import CredentialsRepository from './CredentialsRepository';

// CREATE IMAGE LINK
const createImg = async (data) => {
  console.log('1__CredImgBody(bloc)__:');

  try {
    const response = await CredentialsRepository.handleImgCreate(data);
    console.log('1st post img', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('2__createImgBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// UPDATE || APPEND IMAGE LINK
const updateImg = async (data) => {
  console.log('firstly data :');

  try {
    const response2 = await CredentialsRepository.handleImgUpdate(data);
    console.log('2st put img', response2);

    if (response2.status === 200) {
      response2.success = true;
      return response2;
    }
  } catch (e) {}
};

// UPDATE TEXT
const updateText = async (data) => {
  console.log('firstly data :', data);

  try {
    const response = await CredentialsRepository.handleTextUpdate(data);
    console.log(response);

    if (response.status === 200) {
      return true;
    }
  } catch (e) {}
};

// POST TEXT || CREATE TEXT
const createText = async (data) => {
  console.log('firstly data :', data);

  try {
    const response = await CredentialsRepository.handleTextCreate(data);
    console.log(response);

    if (response.status === 200) {
      return true;
    }
  } catch (e) {
    console.log('2__createTextBloc(err', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// EXPORT
const CredentialsBloc = {
  createImg,
  updateImg,
  updateText,
  createText
};

// export { createImg, updateImg updateText };
export default CredentialsBloc;
