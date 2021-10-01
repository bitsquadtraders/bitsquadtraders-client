import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { CoinContext } from '../../CoinProvider';

import Swal from 'sweetalert2';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Title from '../../components/title';
import Footer from '../../admin/components/Footer';

import '../../static/css/trans_two.css';

// 1. GET DETAILS FROM CLICKED COIN
// 2. create a wallet if there is non
const InOrder = () => {
  const history = useHistory();
  const coinId = history.location.pathname.split('/')[2];
  const userId = window.localStorage.getItem('userId');
  const walletId = window.localStorage.getItem('walletId');
  const {
    singleCoin,
    getSingleCoin,
    myCoinWallet,
    createMyCoinWallet,
    mineCoin,
    getMineCoin,
    error,
    createWalletError
  } = useContext(CoinContext);

  useEffect(() => {
    console.log('error while getting singleCoin: ', error);
    // eslint-disable-next-line
    getMineCoin(walletId);
    call();
  }, []);

  const call = () => {
    try {
      getSingleCoin(userId, coinId);
      const myCoin = createMyCoinWallet(coinId, userId);
      console.log('myCoin', myCoin);
    } catch (e) {
      console.log('+++++++createWallet error', e);
      // if (e.errorMessage)
    }
  };

  // console.log('create create wallet :', myCoinWallet);
  // console.log('single single :', singleCoin);
  // console.log('mine mine :', mineCoin);
  // console.log('after: ', error);

  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title title="Wallet" />
        {singleCoin?.map((transaction, index) => (
          <section key={index} className="section-two">
            <h3>{transaction.coin.name}</h3>
            <div className="row-two">
              <div className="total">
                <h4>total</h4>
                <p>{transaction.balance}</p>
              </div>
              <div className="main-info">
                <div className="info">
                  <div>
                    <span>avaialble</span>
                    <span>{transaction.profit}</span>
                  </div>
                  <div>
                    <span>in order</span>
                    <span>{transaction.order}</span>
                  </div>
                </div>
                <div className="buttons">
                  <div>
                    <Link
                      to={`/withdraw/${coinId || transaction.coin._id}`}
                      className="btn"
                    >
                      withdraw funds
                    </Link>
                    <Link
                      // to={`/deposit/${transaction.coin._id}`}
                      to={`/deposit/${coinId || transaction.coin._id}`}
                      className="btn"
                    >
                      deposite funds
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
        <Footer />
      </main>
    </>
  );
};

export default InOrder;
