'use strict';
require('../../modules/es.set');
require('../../modules/esnext.set.is-disjoint-from.v2');
var entryUnbind = require('../../internals/entry-unbind');

module.exports = entryUnbind('Set', 'isDisjointFrom');
