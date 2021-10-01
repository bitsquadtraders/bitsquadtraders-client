import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import doSubmit from '../bloc/DepositBloc';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { CoinContext } from '../../CoinProvider';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Title from '../../components/title';

import '../../static/css/deposite.css';

import { ReactComponent as Copy } from '../../static/images/copy.svg';
import ReactTooltip from 'react-tooltip';

import Swal from 'sweetalert2';

const Deposit = () => {
  const history = useHistory();
  const coinId = history.location.pathname.split('/')[2];

  const [amount, setAmount] = useState('');

  // CONTEXT
  const { getSingleCoin, myCoin, getMyCoin } = useContext(CoinContext);

  // GET CoinId from useContext
  // const coinId =
  //   singleCoin.length === 0
  //     ? window.localStorage.getItem('coinId')
  //     : singleCoin[0].coin._id;

  // GET USER FROM LOCALSTORAGE
  const userId = window.localStorage.getItem('userId');

  // MOUNT
  useEffect(() => {
    console.log('userId ===', userId);
    console.log('coinId ===', coinId);
    getSingleCoin(userId, coinId);
    getMyCoin(coinId);
    // eslint-disable-next-line
  }, []);

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isDeopsit = await doSubmit(
      amount,
      window.localStorage.getItem('userId'),
      window.localStorage.getItem('walletId')
    );
    if (isDeopsit) {
      history.push('/dashboard');
    } else {
      Swal.fire({
        icon: 'error',
        title: "you don't have a wallet",
        confirmButtonText: `<a href="/deposit/${coinId}">Ok</a>`,
        background: '#000',
        width: '60em',
        text: 'Make a deposit now',
        footer: `<a href="/credentials">Upload Documents</a>`
        // timer: 3000,
        // html: '<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif">'
      });
      // history.push('/credentials');
    }
  };

  // ADDRESS FROM 10 COINS ARRAY
  const coinAddress = myCoin.map((item, index) => item.address);
  console.log(' out side mycoin :', coinAddress[0]);

  const qrCode = `https://chart.googleapis.com/chart?chs=225x225&cht=qr&chl=${coinAddress[0]}&chld=L|0`;
  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title title="Deposit Page" />
        {myCoin.map((coin, index) => (
          <section key={index} className="section-two">
            <h3>{coin.name}</h3>
            <div className="row">
              <div className="img">
                <img src={qrCode} alt="bar code" />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="btc-convert">
                    <p>0.0000</p>
                    <span>++BTC</span>
                  </div>
                  <label htmlFor="amount">Amount</label>
                  <input
                    type="text"
                    id="amount"
                    placeholder="amount"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="form-group address">
                  <label htmlFor="address">Wallet Adress</label>
                  <input
                    type="text"
                    id="address"
                    defaultValue={coinAddress[0]}
                    placeholder={coinAddress[0]}
                    onChange={() => {}}
                  />
                  <CopyToClipboard text={coinAddress[0]}>
                    <span
                      data-tip="Copy Address to Clipboard"
                      className="address-copy"
                    >
                      {' '}
                      <Copy />
                      {/* copy text */}
                    </span>
                  </CopyToClipboard>
                  <ReactTooltip />
                </div>
                <button className="site-btn" type="submit">
                  Deposit
                </button>
              </form>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default Deposit;
