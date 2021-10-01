import React, { useState } from 'react';
import TransactionsBloc from '../../../Transaction/bloc/TransactionBloc';

import Spinner from '../../../static/images/nav-images/spinner.gif';
import Swal from 'sweetalert2';
import './adminTrans.css';

const AdminTransactionView = ({ transactionWallet, transactionMyCoin }) => {
  const [subtract, setSubtract] = useState(false);
  const [subValue, setSubValue] = useState('');
  const [updateBalance, setUpdateBalance] = useState(null);
  const [updateProfit, setUpdateProfit] = useState(null);
  const [updateStatus, setUpdateStatus] = useState(null);

  // Loader on Button
  const [balanceLoader, setBalanceLoader] = useState(false);
  const [profitLoader, setProfitLoader] = useState(false);
  const [statusLoader, setStatusLoader] = useState(false);

  // Error States
  const [balanceError, setBalanceError] = useState('');
  const [profitError, setProfitError] = useState('');
  const [statusError, setStatusError] = useState('');

  // TOGGLE CHEKBOX
  function toggle(value) {
    return !value;
  }

  // BALANCE FORM
  const onBalanceForm = async (e) => {
    e.preventDefault();
    console.log('balance', updateBalance);
    console.log('subtract state', subtract);
    setBalanceLoader(true);

    if (subtract === true) {
      var sub = '?subtract=true';
      setSubValue('?subtract=true');
      console.log('1__subtract', sub);
    } else {
      var sub = '?';
      setSubValue('?');
      console.log('2__subtract', sub);
    }
    console.log('OOUUTTSSIIDDEE__subtract', sub);
    try {
      const isBalance = await TransactionsBloc.updateBalance(
        coinAddressId,
        sub,
        updateBalance
      );
      console.log('__isBalanceUi(res)__', isBalance);
      if (isBalance.status === 200) {
        console.log('__isBalanceSuccessUi(res)__', isBalance);
        Swal.fire({
          icon: 'success',
          text: 'Balance Updated',
          allowOutsideClick: false,
          background: '#121007',
          width: '50em'
        });
        setBalanceLoader(false);
        // setInterval(() => {
        //   window.location.reload();
        // }, 2000);
      }
    } catch (e) {
      console.log('__balanceUi(err)__', e);
      setBalanceLoader(false);
      if (e.statuscode === 400) {
        console.log('__errrrrr__', e.error.data?.error);
        setBalanceError(e.error.data?.error);
      }
    }
  };

  // PROFIT FORM
  const onProfitForm = async (e) => {
    e.preventDefault();
    console.log('profit', updateProfit);
    setProfitLoader(true);

    try {
      const isProfit = await TransactionsBloc.updateProfit(
        coinAddressId,
        updateProfit
      );
      console.log('__isProfitUi(res)__', isProfit);
      if (isProfit.status === 200) {
        console.log('__isProfitSuccessUi(res)__', isProfit);
        Swal.fire({
          icon: 'success',
          text: 'Profit Updated',
          allowOutsideClick: false,
          background: '#121007',
          width: '50em'
        });
        setProfitLoader(false);
        setInterval(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (e) {
      console.log('__isProfitUi(err)__', e);
      setProfitLoader(false);
      if (e.statuscode === 400) {
        console.log('__errrrrr__', e.error.data?.error);
        setProfitError(e.error.data?.error);
      }
    }
  };

  // STATUS FORM
  const onStatusForm = async (e) => {
    e.preventDefault();
    console.log('status', updateStatus);
    setStatusLoader(true);

    try {
      const isStatus = await TransactionsBloc.updateStatus(
        walletId,
        updateStatus
      );
      console.log('__isStatusUi(res)__', isStatus);
      if (isStatus.status === 200) {
        console.log('__isStatusSuccessUi(res)__', isStatus);
        Swal.fire({
          icon: 'success',
          title: 'Status Updated',
          background: '#121007',
          width: '50em'
        });
        setStatusLoader(false);
        setInterval(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (e) {
      console.log('__statusUi(err)__', e);
      setStatusLoader(false);
      if (e.statuscode === 400) {
        setStatusError('Select a Status');
      }
    }
  };

  const { balance, order, profit, coin, owner } = transactionMyCoin;
  console.log('__balance is coin balance__', balance);
  console.log('__order is inorder__', order);
  console.log('__profit__', profit);
  console.log('__coin__', coin?.name);
  const { amount, _id, coinAddress, walletAddress } = transactionWallet;
  console.log('__amount is inorder__', amount);
  console.log('__coinAddress is coin balance__', coinAddress?.balance);
  const coinAddressId = coinAddress?._id;
  let walletId = _id;
  console.log('__coinAddressIdNEW__', coinAddressId);
  // setCoinAddressIdState(coinAddressId);
  // console.log('__walletId__', _id);
  // console.log('__coinWallectId__', walletId);
  // console.log('__coinAddressIdState__', coinAddressIdState);

  return (
    <div>
      {/* <button id="myBtn">Open Modal</button> */}
      {/* The Modal */}
      <div id="myModal" className="modal" data="id">
        {/* Modal content */}
        <div className="modal-content-trans">
          <span className="close">×</span>

          {/* START */}
          <div className="row">
            {/* 1ST */}
            <form className="modal-box" onSubmit={onBalanceForm}>
              <div className="img-upload">
                <div className="frame-u color">
                  <img src={coin?.icon ?? Spinner} alt="" />
                  <div className="text-frame">
                    <p>{coin?.name}</p>
                  </div>
                  <div className="text-frame">
                    <p>
                      Wallet Address&nbsp;&nbsp; = &nbsp;&nbsp;{walletAddress}
                    </p>
                  </div>
                  <div className="text-frame">
                    <p>Inorder&nbsp;&nbsp; = &nbsp;&nbsp;{order}</p>
                  </div>
                  <div className="text-frame">
                    <p>Balance&nbsp;&nbsp; = &nbsp;&nbsp;{balance}</p>
                  </div>
                  <div className="text-frame">
                    <p>Profit&nbsp;&nbsp; = &nbsp;&nbsp;+{profit}</p>
                  </div>
                </div>
              </div>
              <div className="cred-form">
                {balanceError && <div className="err-msg">{balanceError}</div>}
                <div className="form-group">
                  <label htmlFor="one">Update Wallet Balance</label>
                  <input
                    type="text"
                    id="one"
                    placeholder="Enter amount $"
                    onChange={(e) => setUpdateBalance(e.target.value)}
                  />
                  <span className={subtract ? 'checkbox-name' : 'hide'}>
                    Subtraction Mode
                  </span>
                  <div className="checkbox" style={{ cursor: 'pointer' }}>
                    <input
                      style={{ cursor: 'pointer' }}
                      type="checkbox"
                      id="subtract"
                      checked={subtract}
                      onChange={(e) => setSubtract(toggle)}
                    />
                  </div>
                </div>
                {/* Balance Button */}
                <button
                  style={{ cursor: 'pointer' }}
                  className="site-btn .mouse-pointer"
                  type="submit"
                >
                  {balanceLoader ? 'sending..' : 'Send'}
                </button>
              </div>
            </form>

            {/* 2ND */}
            <form className="modal-box" onSubmit={onProfitForm}>
              <div className="cred-form">
                {profitError && <div className="err-msg">{profitError}</div>}
                <div className="form-group">
                  <label htmlFor="one">Update Wallet Profit</label>
                  <input
                    type="text"
                    id="one"
                    placeholder="Enter amount $"
                    onChange={(e) => setUpdateProfit(e.target.value)}
                  />
                </div>

                <button
                  style={{ cursor: 'pointer' }}
                  className="site-btn"
                  type="submit"
                >
                  {profitLoader ? 'sending..' : 'Send'}
                </button>
              </div>
            </form>
            {/* 3rd */}
            <form className="modal-box" onSubmit={onStatusForm}>
              <div className="cred-form select-form">
                <div className="box1 form-group ">
                  {statusError && <div className="err-msg">{statusError}</div>}
                  <label htmlFor="status">Update Transaction Status</label>
                  <select
                    id="status"
                    name="status"
                    onChange={(e) => setUpdateStatus(e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                <button className="box2 site-btn" type="submit">
                  {statusLoader ? 'Updating..' : 'Update'}
                </button>
              </div>
            </form>
          </div>
          {/* STOP */}
        </div>
        {/* Modal content end */}
      </div>
    </div>
  );
};

export default AdminTransactionView;
