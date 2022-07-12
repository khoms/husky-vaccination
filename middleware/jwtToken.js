//Create jwt token

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();

  //options for cookie

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
  res.header("Authorization", "Bearer " + token);
};

module.exports = sendToken;
