import TransactionsRepository from './TransactionRepository';

// // GET ALL TRANSACTIONS
// const getAllTransactions = async () => {
//   console.log('1__TransactionGetAll(Bloc)__:');

//   try {
//     const response = await TransactionsRepository.getAllTransactions();
//     console.log('__TransAllBloc(res)__', response);

//     if (response.status === 200) {
//       response.success = true;
//       return response;
//     }
//   } catch (e) {
//     console.log('__transAllBloc(err)__', e.response);
//     const errorMessage = {
//       statuscode: 400,
//       error: e.response
//     };
//     throw errorMessage;
//   }
// };

// GET ALL TRANSACTIONS PAGINATION
const getAllTransactions = async (count) => {
  console.log('1__TransactionGetAll(Bloc)__:', count);

  try {
    const response = await TransactionsRepository.getAllTransactions(count);
    console.log('__TransAllBloc(res)__', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__transAllBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// GET SINGLE TRANSACTION WALLET
const getOneTransactionWallet = async (walletId) => {
  console.log('1__TransactionGetWallet(Bloc)__:', walletId);

  try {
    const response = await TransactionsRepository.getOneTransactionWallet(
      walletId
    );
    console.log('__TransOneWalletBloc(res)__', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__transOneWalletBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// GET SINGLE TRANSACTION MYCOIN
const getOneTransactionMyCoin = async (coinAddressId) => {
  console.log('1__TransactionGetMyCoin(Bloc)__:', coinAddressId);

  try {
    const response = await TransactionsRepository.getOneTransactionMyCoin(
      coinAddressId
    );
    console.log('__TransOneMyCoinBloc(res)__', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__transOneMyCoinBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// GET ALL MY TRANSACTIONS
const getMyTransactions = async (userId) => {
  console.log('1__TransactionGetMyAll(Bloc)__:');

  try {
    const response = await TransactionsRepository.getMyTransactions(userId);
    console.log('__TransMyBloc(res)__', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__getMyTransBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// UPDATE BALANCE
const updateBalance = async (coinAddressId, sub, updateBalance) => {
  console.log(
    '1__TransUpdateBalance(Bloc)__',
    coinAddressId,
    sub,
    updateBalance
  );

  const data = {
    coinAddressId: coinAddressId,
    subtract: sub,
    amount: updateBalance
  };
  try {
    const response = await TransactionsRepository.transactionBalanceUpdate(
      data
    );
    console.log('__TransUpdateBalBloc(res)__', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__transUpdateBalBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// UPDATE PROFIT
const updateProfit = async (coinAddressId, updateProfit) => {
  console.log('1__TransUpdateProfit(Bloc)__', coinAddressId, updateProfit);

  const obj = {
    coinAddress: coinAddressId,
    amount: updateProfit
  };
  try {
    const response = await TransactionsRepository.transactionProfitUpdate(obj);
    console.log('__TransUpdateProfitBloc(res)__', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__transUpdateProfitBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// UPDATE STATUS
const updateStatus = async (walletId, updateStatus) => {
  console.log('1__TransUpdateStatus(Bloc)__', walletId, updateStatus);

  const data = {
    walletId,
    transactionStatus: updateStatus
  };
  try {
    const response = await TransactionsRepository.transactionStatusUpdate(data);
    console.log('__TransUpdateStatusBloc(res)__', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__transUpdateStatusBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// DELETE TRANSACTION
const deleteTrans = async (data) => {
  console.log('1__TransDelete(Bloc)__', data);

  try {
    const response = await TransactionsRepository.deleteTrans(data);
    console.log('__TransDeleteBloc(res)__', response);

    if (response.status === 200) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log('__transDeleteBloc(err)__', e.response);
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

// EXPORT
const TransactionsBloc = {
  getAllTransactions,
  getOneTransactionWallet,
  getOneTransactionMyCoin,
  getMyTransactions,
  updateBalance,
  updateProfit,
  updateStatus,
  deleteTrans
};

// export { createImg, updateImg updateText };
export default TransactionsBloc;
