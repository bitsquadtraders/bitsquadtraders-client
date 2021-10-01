// import React from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import Joi from "joi-browser";
// import Form from "../../components/form";
// // import * as userService from "../services/userService";
// import LoginBloc from "../bloc/LoginBloc";
// // import { ReactComponent as Svg12 } from "../static/images/logo1.svg";
// // import Img2 from "../static/images/nav-images/MaskGroup.png";
// // import auth from '../services/authService';
// // TODO restructure

// // import '../static/css/navs.css';
// // import '../static/css/auth.css';
// // import '../static/css/auth_overide.css';

// class RegisterForm extends Form {
//   state = {
//     data: {
//       name: "",
//       email: "",
//       phonenumber: "",
//       password: "",
//     },
//     errors: {},
//   };

//   schema = {
//     name: Joi.string().required().label("Name"),
//     email: Joi.string().required().email().label("Email"),
//     phonenumber: Joi.string().required().label("Phone"),
//     password: Joi.string().required().min(5).label("Password"),
//   };

//   doSubmit = async () => {
//     try {
//       //   const response = await userService.register(this.state.data);
//       var user = new LoginBloc();
//       user.submitUser(this.state.data);
//       return;
//       localStorage.setItem("token", response.config.headers.Authorization);
//       // TODO restructure
//       //   console.log(response);
//     } catch (ex) {
//       if (ex.response && ex.response.status === 400) {
//         const errors = { ...this.state.errors };
//         // GET error res from API
//         // errors.name = ex.response.data.error;
//         // CUSTOMIZED error res
//         toast.success("Welcome");
//         toast.error("User dey here.");
//         errors.name = "User already registered";
//         this.setState({ errors });
//       }
//     }
//   };
//   render() {
//     return (
//       <div>
//         <h1>Register</h1>
//         <header>
//           <div className="logo">
//             <Link to="/">
//               <img src={Img2} alt="triangle" />
//               <h5>bitsquadtraders</h5>
//             </Link>
//           </div>
//         </header>
//         <main>
//           <form onSubmit={this.handleSubmit}>
//             <div className="header">
//               <h3>Welcome!! to bitsquadtraders</h3>
//               <div className="mobile">
//                 <Svg12 />
//                 <h2>Welcome!! to bitsquadtraders</h2>
//               </div>
//             </div>
//             <div className="main-form">
//               {this.renderInput("name", "Name")}
//               {this.renderInput("email", "Email")}
//               {this.renderInput("phonenumber", "Phone")}
//               {this.renderInput("password", "Password", "password")}
//               {this.renderButton("Register")}
//             </div>

//             <div className="question">
//               <Link to="/login">Already have an account</Link>
//               <Link to="#">
//                 <span>/</span> Forgot Password
//               </Link>
//             </div>
//           </form>
//         </main>
//         {/* LOGIN END */}
//       </div>
//     );
//   }
// }

// export default RegisterForm;
