const getAuthHeader = () => {
  const authKey = process.env.AUTH_KEY;
  if (!authKey) {
    throw new Error(
      "Please provide the environment variable AUTH_KEY"
    );
  }

  const authHeader = {
    authorization: process.env.AUTH_KEY
  };
  return authHeader;
};

module.exports = { getAuthHeader };
