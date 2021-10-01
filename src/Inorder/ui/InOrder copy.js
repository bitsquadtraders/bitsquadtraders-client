import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import InOderBloc from '../bloc/InOrderBloc';
import { CoinContext } from '../../CoinProvider';

import Swal from 'sweetalert2';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Title from '../../components/title';

// import Deposit from '../../Deposit/ui/Deposit';

// 1. GET id from URL
// 2. Make API CALL
const InOrder = () => {
  const history = useHistory();
  const coinId = history.location.pathname.split('/')[2];
  const userId = window.localStorage.getItem('userId');
  const { singleCoin, getSingleCoin, createMyCoinWallet, error } =
    useContext(CoinContext);

  useEffect(() => {
    getSingleCoin(userId, coinId);
    console.log('error while getting singleCoin: ', error);
    // eslint-disable-next-line
    createMyCoinWallet(coinId, userId);
  }, []);

  console.log('after: ', error);

  if (error) {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const isMyCoinWallet = await InOderBloc.createMyCoinWallet(
        coinId,
        window.localStorage.getItem('userId')
      );
      if (isMyCoinWallet) {
        history.push(`/inOrder/${coinId}`);
      }
      console.log('proooof!!!!!');
    };
    Swal.fire({
      icon: 'error',
      title: "Inorder you don't have a wallet",
      confirmButtonText: `<a>Ok</a>`,
      background: '#000',
      width: '60em',
      text: 'Make a deposit now',
      footer: `<a href="/inorder/${coinId}">Goto to Deposit Page</a>`
      // timer: 3000,
      // html: '<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif">'
    });
    handleSubmit();

    // CREATE COIN WALLET
    // await InOderBloc.createMyCoinWallet({
    //   userId,
    //   coinId
    // });
    // history.push(`/inorder/${coinId}`);
    // console.log('wallet created!!');
  }
  // Swal.fire({
  //   text: 'How was your experience getting help with this issue?',
  //   buttons: {
  //     cancel: 'Close'
  //   },
  //   content: (
  //     <div>
  //       <h1> Fuck uuu</h1>
  //       <Title title="testtttttt" />
  //       <Title title="testtttttt" />
  //     </div>
  //   )
  // });

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
      </main>
    </>
  );
};

export default InOrder;
