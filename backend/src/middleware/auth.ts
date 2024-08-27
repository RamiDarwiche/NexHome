const { auth } = require("express-oauth2-jwt-bearer");

export const jwtCheck = auth({
  audience: "nexhome-api",
  issuerBaseURL: "https://dev-v4afr4gc4zeiogzu.us.auth0.com/",
  tokenSigningAlg: "RS256",
});
