/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var generate = require('../generate');
var api      = require('../api');

/**
 * List transactions
 * @return {Object} Transactions functions
 */
function transactions() {
  var baseURL    = '/v1/reporting/transactions';
  var operations = ['create', 'update', 'get', 'list'];

  var ret = {
    baseURL: baseURL,
    /**
     * List transactions
     * @param  {Object}   data - {start_date: '2019-10-01T00:00:00Z', end_date: '2019-10-10T23:59:59Z'} is mandatory
     * @param  {Function} cb
     * @return {Object} List of transactions
     */
    list:    function execute(data, cb) {
      api.executeHttp('GET', this.baseURL, data, config, cb);
    }
  };
  ret     = generate.mixin(ret, operations);
  return ret;
}

module.exports = transactions;
