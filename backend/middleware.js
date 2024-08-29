
const cors = require('cors');
const express = require('express');

const configureCors = () => {
  return cors();
};

const configureJsonParsing = () => {
  return express.json();
};

module.exports = {
  configureCors,
  configureJsonParsing,
};
