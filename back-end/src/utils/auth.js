const { sign, verify } = require('jsonwebtoken');
const { readFileSync } = require('fs');

const SECRET = readFileSync('jwt.evaluation.key', 'utf-8');
const jwtConfig = {
  expiresIn: '20d',
};

const jwtGenerator = (payload) =>
sign({ data: payload }, SECRET, jwtConfig);

const jwtValidate = (token) => verify(token, SECRET);

module.exports = { jwtGenerator, jwtValidate };
