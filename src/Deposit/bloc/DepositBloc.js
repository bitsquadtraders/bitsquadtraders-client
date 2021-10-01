import DepositsRepository from './DepositRepository';

const doSubmit = async (amount, userId, walletId) => {
  console.log('1__DepositCreate(bloc)__:', amount, userId, walletId);

  const obj = {
    owner: userId,
    coinAddress: walletId,
    transactionType: 'deposit',
    amount: amount
  };

  try {
    const response = await DepositsRepository.createDeposit(obj);
    console.log('__DepositCreateBloc(res)__', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__DepositCreateBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// GET EXCHANGE VALUES
const getExchange = async (coinCryptoAbbr, amount) => {
  console.log('1__exchange(bloc)__:', coinCryptoAbbr, amount);
  const data = {
    cryptoAbbr: coinCryptoAbbr.coinCryptoAbbr,
    amount: coinCryptoAbbr.amount
  };
  try {
    const response = await DepositsRepository.getExchange(data);
    console.log('__exchangeBloc(res)__', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__exchangeBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

const DepositBloc = {
  doSubmit,
  getExchange
};

export default DepositBloc;
