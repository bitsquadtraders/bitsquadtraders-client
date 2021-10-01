import CoinsRepository from './CoinsRepository';

// CREATE IMAGE LINK
const createImg = async (data) => {
  console.log('credentials firstly data :');

  try {
    const response = await CoinsRepository.handleImgCreate(data);
    console.log('1st post img', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {}
};

// UPDATE TEXT
const updateText = async (data) => {
  console.log('firstly data :', data);

  try {
    const response = await CoinsRepository.handleTextUpdate(data);
    console.log(response);

    if (response.status === 200) {
      return true;
    }
  } catch (e) {}
};

// CREATE TEXT
const createText = async (data) => {
  console.log('firstly data :', data);

  try {
    const response = await CoinsRepository.handleTextCreate(data);
    console.log(response);

    if (response.status === 200) {
      return true;
    }
  } catch (e) {}
};

// DELETE TEXT
const deleteText = async (coinId) => {
  console.log('firstly data :', coinId);

  const data = {
    coinId: coinId
  };
  try {
    const response = await CoinsRepository.handleTextDelete(data);
    console.log(response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__deleteCoinBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// EXPORT
const CoinsBloc = {
  createImg,
  updateText,
  createText,
  deleteText
};

// export { createImg, updateImg updateText };
export default CoinsBloc;
