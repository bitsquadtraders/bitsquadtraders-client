import React, {
  useState,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef
} from 'react';
import { useHistory } from 'react-router-dom';

import doSubmit from '../bloc/DepositBloc';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { CoinContext } from '../../CoinProvider';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Title from '../../components/title';
import Footer from '../../admin/components/Footer';

import '../../static/css/deposite.css';

import { ReactComponent as Copy } from '../../static/images/copy.svg';
import ReactTooltip from 'react-tooltip';

import Swal from 'sweetalert2';
import axios from 'axios';

// CALL TWO FUNC
// 1. Post to transaction
// 2. Get 1 of 10 coin to extract coin.address
// 3.
const Deposit = () => {
  const history = useHistory();
  const coinId = history.location.pathname.split('/')[2];

  const [amount, setAmount] = useState('');
  const [cryptoValue, setCryptoValue] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [coinAddress, setCoinAddress] = useState('');

  // CONTEXT
  const { singleCoin, getSingleCoin, myCoin, getMyCoin } =
    useContext(CoinContext);

  // GET USER FROM LOCALSTORAGE
  const userId = window.localStorage.getItem('userId');
  // const walletId = window.localStorage.getItem('walletId');

  // MOUNT
  useEffect(() => {
    getSingleCoin(userId, coinId);
    getMyCoin(coinId);
    // eslint-disable-next-line
    qrCodeAddress();
  }, []);

  console.log('__myCOinEffect__', myCoin);
  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isDeopsit = await doSubmit(
      amount,
      window.localStorage.getItem('userId'),
      window.localStorage.getItem('walletId')
    );
    if (isDeopsit) {
      Swal.fire({
        icon: 'success',
        title: 'Deposit awaits verification',
        confirmButtonText: `<a href="/inorder/${coinId}">Ok</a>`,
        background: '#000',
        width: '60em'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: "you don't have a wallet, creating one for you",
        confirmButtonText: `<a href="/inorder/${coinId}">Ok</a>`,
        background: '#121007',
        width: '60em',
        text: 'Make a deposit now'
      });
      // history.push('/credentials');
    }
  };

  const handleChange = async (e) => {
    console.log('__targetValue__', e.target.value);
    setAmount(e.target.value);
    const coinCryptoAbbr = singleCoin[0]?.coin.abbr;
    const data = await axios.get(
      `https://api.exchangerate.host/convert?from=${coinCryptoAbbr}&to=USD&source=crypto&amount=${amount}`
    );
    console.log('__dataInsideEffect__', data.data.result);
    setCryptoValue(data.data.result);
  };

  // ADDRESS FROM 10 COINS ARRAYy
  const qrCodeAddress = () => {
    console.log('__out side MYCOIN :', myCoin);
    const coinAddressNew = myCoin.map((item, index) => item.address);
    console.log('__out side mycoin__ :', coinAddressNew);
    setCoinAddress(coinAddressNew);

    const qrCodeNew = `https://chart.googleapis.com/chart?chs=225x225&cht=qr&chl=${coinAddressNew[0]}&chld=L|0`;
    setQrCode(qrCodeNew);
  };

  // CRYPRO EXCHANGE
  // const cryptoConvert = async () => {
  //   const coinCryptoAbbr = singleCoin[0]?.coin.abbr;
  //   const data = await axios.get(
  //     `https://api.exchangerate.host/convert?from=${coinCryptoAbbr}&to=USD&source=crypto&amount=${cryptoValue}`
  //   );
  //   console.log('__cryptoResult__', data.data.result);
  // };
  // cryptoConvert();

  console.log('__singleCoin_COIN___', singleCoin[0]?.coin);

  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title title="Deposit Page" />
        {myCoin?.map((coin, index) => (
          <section key={index} className="box-two">
            <h3>{coin.name}</h3>
            <div className="row">
              <div className="img">
                <img src={qrCode} alt="bar code" />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="btc-convert">
                    <p>{amount === '' ? '0.00' : cryptoValue}</p>
                    <span>++BTC</span>
                  </div>
                  <label htmlFor="amount">Amount</label>
                  <input
                    autoComplete="off"
                    type="text"
                    id="amount"
                    placeholder="amount"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group address">
                  <label htmlFor="address">Wallet Adress</label>
                  <input
                    style={{ cursor: 'not-allowed' }}
                    disabled
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
        <Footer />
      </main>
    </>
  );
};

export default Deposit;
