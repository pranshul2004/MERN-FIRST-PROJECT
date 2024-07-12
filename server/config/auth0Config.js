import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "http://localhost:8000",
  issueBaseURL: "https://dev-xjq1un088puajfiz.us.auth0.com",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
