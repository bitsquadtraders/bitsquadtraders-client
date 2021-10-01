import React from 'react';
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import './static/css/auth_overide.css';
// import './static/css/cred.css';
// import './static/css/trans_two.css';

// import './static/css/deposite.css';
// import './static/css/transaction.css';
// import './static/css/base.css';
// import './static/css/auth.css';
// import './static/css/dashboard.css';
// import './static/css/wallet.css';
// import './static/css/admin_edit.css';
// import './static/css/coins.css';
// import './static/css/navs.css';
import './static/css/custom.css';
import './admin/static/css/admin_custom.css';

import ProtectedRoute from './components/common//ProtectedRoute';
import Admin from './admin/Dashboard/ui/AdminDashboard';
import UsersAdmin from './admin/User/ui/AdminUsers';
import CoinsAdmin from './admin/Coins/ui/AdminCoins';
import CoinsEditAdmin from './admin/Coins/ui/AdminCoinsEdit';
import CoinsCreateAdmin from './admin/Coins/ui/AdminCoinsCreate';
import StakeAdmin from './admin/Stake/ui/AdminStake';
import TransactionAdmin from './admin/Transaction/ui/AdminTransaction';
import Alert from './Alert/ui/Alert';
import Profile from './Profile/ui/Profile';
import Stake from './Stake/ui/Stake';
import Credentials from './Credentials/ui/Credentials';
import Transaction from './Transaction/ui/Transaction';
import Withdraw from './Withdraw/ui/Withdraw';
import Deposit from './Deposit/ui/Deposit';
import InOrder from './Inorder/ui/InOrder';
import Coins from './Coin/ui/Coins';
import Dashboard from './Home/ui/Dashboard';
import ResetPassword from './auth/ui/Reset_Password';
import ForgotPassword from './auth/ui/Forgot_Password';
import ChangePassword from './auth/ui/Change_Password';
import Register from './auth/ui/Register';
import Login from './auth/ui/Login';
import Logout from './auth/ui/Logout';

import NavBar from './components/navbar';
import { render } from 'react-dom/cjs/react-dom.development';

const App = () => {
  const auth = window.localStorage.getItem('userLevel');
  console.log('__users from protectR', auth);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/navbar" component={NavBar} />

        {/* USER ROUTES --------------------------------*/}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/coins" component={Coins} />
        <Route path="/inorder/:id" component={InOrder} />
        <Route path="/deposit/:id" component={Deposit} />
        <Route path="/withdraw/:id" component={Withdraw} />
        <Route path="/transaction" component={Transaction} />
        <Route path="/credentials/:id" component={Credentials} />
        <Route path="/stake" component={Stake} />
        <Route path="/profile" component={Profile} />
        <Route path="/alert" component={Alert} />

        {/* ADMIN ROUTES --------------------------------*/}
        {/* <ProtectedRoute path="/admin" component={Admin} /> */}
        {/* <Route path="/admin" component={Admin} /> */}
        {/* <Router basename={'/admin'}>
          <Route path="/admin" component={Admin} />
        </Router> */}
        <Route
          path="/admin-users"
          render={() => {
            if (auth !== 'admin') return <Redirect to="/login" />;
            return <UsersAdmin />;
          }}
        />
        <Route
          path="/admin-coins"
          render={() => {
            if (auth !== 'admin') return <Redirect to="/login" />;
            return <CoinsAdmin />;
          }}
        />
        <Route
          path="/admin-coins-edit/:id"
          render={() => {
            if (auth !== 'admin') return <Redirect to="/login" />;
            return <CoinsEditAdmin />;
          }}
        />
        <Route
          path="/admin-coins-create"
          render={() => {
            if (auth !== 'admin') return <Redirect to="/login" />;
            return <CoinsCreateAdmin />;
          }}
        />
        <Route
          path="/admin-coins-create"
          render={() => {
            if (auth !== 'admin') return <Redirect to="/login" />;
            return <CoinsCreateAdmin />;
          }}
        />
        <Route
          path="/admin-stakes"
          render={() => {
            if (auth !== 'admin') return <Redirect to="/login" />;
            return <StakeAdmin />;
          }}
        />
        <Route
          path="/admin-transactions"
          render={() => {
            if (auth !== 'admin') return <Redirect to="/login" />;
            return <TransactionAdmin />;
          }}
        />

        {/* AUTH ROUTES --------------------------------*/}
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/change-password" component={ChangePassword} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Redirect from="/" exact to="/login" />
        {/* <Redirect to="/not-found" /> */}
      </Switch>
      <Router>
        <ProtectedRoute path="/admin" component={Admin} />
        {/* <Route path="/admin" component={Admin} /> */}
      </Router>
    </BrowserRouter>
  );
};

export default App;
