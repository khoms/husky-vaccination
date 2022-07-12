import React, { useState, useContext } from "react";

import cookie from "react-cookies";

import { AuthContext } from "../../provider/AuthProvider";

const LoginPage = (props) => {
  const [login, setLogin] = useState(true);
  // const [username, setUsername] = useState("khoms@gmail.com");
  // const [password, setPassword] = useState("khoms123");
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const { getToken } = useContext(AuthContext);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = async (e) => {
    setError("");
    e.preventDefault();
    // const payload = {
    //   email: state.email,
    //   password: state.password,
    // };
    await fetch(`https://husky-circle.herokuapp.com/api/auth/adminLogin`, {
      withCredentials: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email: state.email,
        password: state.password,
      }),
    })
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data);
        // localStorage.setItem("ACCESS_TOKEN_NAME", data.token);
        // getToken();
        if (data.success) {
          setError(data.error);
          localStorage.setItem("ACCESS_TOKEN_NAME", data.token);
          cookie.save("token", data.token);
          getToken();
        }
        if (data.success == false) {
          setError(data.error);
        }
      })

      //   if (response.status === 200) {
      //     setState((prevState) => ({
      //       ...prevState,
      //       successMessage: "Login successful. Redirecting to home page..",
      //     }));
      //     setError("");
      //     // localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
      //     // redirectToHome();
      //     // props.showError(null)
      //   } else if (response.code === 204) {
      //     setError("Username and password do not match");
      //   }
      // })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const loginScreen = (event) => {
  //   event.preventDefault();
  //   console.log("Called");
  //   // if (validateInput()) {
  //   fetch(`http://192.168.1.164:3000/api/auth/userLogin`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: JSON.stringify({
  //       email: state.email,
  //       password: state.password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then(async (data) => {
  //       console.log(data);
  //       setUser(data);
  //       //    try {
  //       // const token = await AsyncStorage.setItem('token', data.token);
  //       // getToken();

  //       // await AsyncStorage.setItem('userId', data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // setLoginError(err);
  //     });
  //   return true;
  //   // }
  // };

  return (
    <div
      className="login-div"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/white-background-with-circular-lines-copy-space_23-2148822143.jpg?t=st=1657303301~exp=1657303901~hmac=695fb33862f22607a966c4363551552a18e1f56513dfffaae86cf92129bb46cb&w=1380")`,
        height: "100vh",
      }}
    >
      <section>
        {login ? (
          <div className="login-box">
            <div className="row justify-content-sm-center h-100">
              <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                <div className="text-center my-5">
                  {/* <img
                  src="https://www.kindpng.com/picc/m/144-1445364_uconn-husky-logo-hd-png-download.png"
                  alt="logo"
                  width="100"
                /> */}
                </div>
                <div className="card shadow-lg">
                  <div className="card-body p-5">
                    <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                    {/* <form
                      // method="POST"
                      className="needs-validation"
                      
                    > */}
                    <form onSubmit={handleSubmitClick}>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="mb-2 text-muted"
                        >
                          E-Mail Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          value={state.username}
                          onChange={handleChange}
                          required
                          autoFocus
                        />
                        <div className="invalid-feedback">Email is invalid</div>
                      </div>

                      <div className="mb-3">
                        <div className="mb-2 w-100">
                          <label className="text-muted">Password</label>
                          <a href="forgot.html" className="float-end">
                            Forgot Password?
                          </a>
                        </div>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          onChange={handleChange}
                          required
                          value={state.password}
                        />
                        <div className="invalid-feedback">
                          Password is required
                        </div>
                      </div>
                      <div className="login-error-message">
                        <h6>{error}</h6>
                      </div>

                      <div className="d-flex align-items-center">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            className="form-check-input"
                          />

                          <label className="form-check-label">
                            Remember Me
                          </label>
                        </div>

                        <input
                          className="btn btn-primary ms-auto"
                          type="submit"
                          // onSubmit={loginScreen}
                          value="Login"
                        />

                        {/* <button
                          className="btn btn-primary ms-auto"
                          onClick={loginScreen}
                        >
                          Login
                        </button> */}
                      </div>
                    </form>
                  </div>
                  <div className="card-footer py-3 border-0">
                    <div className="text-center">
                      Don't have an account?{" "}
                      {/* <a href="register.html" className="text-dark">
                        Create One
                      </a> */}
                      <button
                        className="btn  ms-auto"
                        onClick={() => setLogin(!login)}
                      >
                        <u> Create One</u>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-5 text-muted">
                  {user}
                  Copyright &copy; 2022 &mdash; Husky-Circle
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1>prank</h1>
          // <div className="container h-100">
          //   <div className="row justify-content-sm-center h-100">
          //     <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
          //       <div className="text-center my-5">
          //         {/* <img
          //     src="https://www.kindpng.com/picc/m/144-1445364_uconn-husky-logo-hd-png-download.png"
          //     alt="logo"
          //     width="100"
          //   /> */}
          //       </div>
          //       <div className="card shadow-lg">
          //         <div className="card-body p-5">
          //           <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
          //           <form
          //             // method="POST"
          //             className="needs-validation"
          //             noValidate=""
          //             autoComplete="off"
          //             onSubmit={loginScreen}
          //           >
          //             <div className="mb-3">
          //               <label className="mb-2 text-muted">
          //                 E-Mail Address
          //               </label>
          //               <input
          //                 id="email"
          //                 type="email"
          //                 className="form-control"
          //                 name="email"
          //                 value={username}
          //                 onChange={(text) => setUsername(text)}
          //                 required
          //                 autoFocus
          //               />
          //               <div className="invalid-feedback">Email is invalid</div>
          //             </div>

          //             <div className="mb-3">
          //               <div className="mb-2 w-100">
          //                 <label className="text-muted">Password</label>
          //                 <a href="forgot.html" className="float-end">
          //                   Forgot Password?
          //                 </a>
          //               </div>
          //               <input
          //                 id="password"
          //                 type="password"
          //                 className="form-control"
          //                 name="password"
          //                 onChange={(text) => setPassword(text)}
          //                 required
          //                 value={password}
          //               />
          //               <div className="invalid-feedback">
          //                 Password is required
          //               </div>
          //             </div>

          //             <div className="d-flex align-items-center">
          //               <div className="form-check">
          //                 <input
          //                   type="checkbox"
          //                   name="remember"
          //                   id="remember"
          //                   className="form-check-input"
          //                 />
          //                 <label className="form-check-label">
          //                   Remember Me
          //                 </label>
          //               </div>
          //               <button
          //                 type="submit"
          //                 className="btn btn-primary ms-auto"
          //                 onClick={loginScreen}
          //               >
          //                 Sign Up
          //               </button>
          //             </div>
          //           </form>
          //         </div>
          //         <div className="card-footer py-3 border-0">
          //           <div className="text-center">
          //             Already have an account?{" "}
          //             {/* <a href="register.html" className="text-dark">
          //           Create One
          //         </a> */}
          //             <button
          //               className="btn  ms-auto"
          //               onClick={() => setLogin(!login)}
          //             >
          //               <u>Login</u>
          //             </button>
          //           </div>
          //         </div>
          //       </div>
          //       <div className="text-center mt-5 text-muted">
          //         {user}
          //         Copyright &copy; 2022 &mdash; Husky-Circle
          //       </div>
          //     </div>
          //   </div>
          // </div>
        )}
      </section>
    </div>
  );
};

export default LoginPage;
