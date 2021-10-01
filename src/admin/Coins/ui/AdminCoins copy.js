import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

import { CoinContext } from '../../../CoinProvider';

import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

import '../../static/css/coins.css';
import '../../static/css/admin_edit.css';
import '../../static/css/admin_custom.css';

const CoinsAdmin = () => {
  const history = useHistory();
  const { coins, fetchCoin } = useContext(CoinContext);

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line
  }, []);

  // FIX COLLECT FROM STATE AND SAVE IN A VARIABLE = LOCALSTORAGE, ONCE ERROR, DELETE FROM LOCALSTORAGE;
  // const coinId = coins[0]._id || window.localStorage.getItem('coinId');

  const handleDelete = (coinId) => async () => {
    console.log('clicked!! dellete');

    // DEFINE HEADER
    var token = window.localStorage.getItem('token') || [];
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`
      }
    };

    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this record!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      background: '#121007',
      width: '50em'
    }).then((willDelete) => {
      if (willDelete) {
        axios({
          method: 'delete',
          url: `https://bitsquadtraders-api.herokuapp.com/api/v1/coins/${coinId}`,
          headers: headers
        })
          .then((response) => {
            if (response.data.success) {
              console.log('good res', response);
              Swal.fire(' Your record has been deleted!', {
                icon: 'success',
                background: '#121007',
                width: '50em'
              });
              setInterval(() => {
                window.location.reload();
              }, 3000);
            } else {
              Swal.fire({
                title: 'Something went wrong!',
                background: '#121007',
                width: '50em'
              });
            }
          })

          .catch((e) => {
            console.log(e);
            Swal.fire({
              text: e.response.data.msg,
              icon: 'error',
              background: '#121007',
              width: '50em'
            });
          });
      }
    });
    // history.push('/admin-coins');
  };

  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title title="Coin admin page" />
        {/* CONTENT */}
        <form>
          <section className="grid">
            {coins.map((coin, index) => (
              <div key={index} className="card one-card">
                <div className="update-card">
                  <Link
                    to="/admin-coins"
                    className="delete-card"
                    onClick={handleDelete(coin._id)}
                  >
                    <p>X</p>
                  </Link>
                  <Link to={`/admin-coins-edit/${coin._id}`}>
                    <h3>{coin.name}</h3>
                    <img src={coin.icon} alt={coin.abbr} />
                    <input type="text" placeholder={coin.address} />
                  </Link>
                </div>
              </div>
            ))}
            <span>
              {' '}
              <Link
                // FIX coins[0]._id ??
                to={`/admin-coins-create`}
              >
                <i className="fa fa-check" />
              </Link>
            </span>
          </section>
        </form>

        <Footer />
      </main>
    </>
  );
};

export default CoinsAdmin;
