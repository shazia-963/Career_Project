'use strict';

var CreateDataProperty = require('es-abstract/2023/CreateDataProperty');
var IsCallable = require('es-abstract/2023/IsCallable');
var RequireObjectCoercible = require('es-abstract/2023/RequireObjectCoercible');
var ToObject = require('es-abstract/2023/ToObject');
var safeConcat = require('safe-array-concat');
var reduce = require('array.prototype.reduce');

var $gOPD = Object.getOwnPropertyDescriptor;
var $getOwnNames = Object.getOwnPropertyNames;
var $getSymbols = Object.getOwnPropertySymbols;

var getAll = $getSymbols ? function (obj) {
	return safeConcat($getOwnNames(obj), $getSymbols(obj));
} : $getOwnNames;

var isES5 = IsCallable($gOPD) && IsCallable($getOwnNames);

module.exports = function getOwnPropertyDescriptors(value) {
	RequireObjectCoercible(value);
	if (!isES5) {
		throw new TypeError('getOwnPropertyDescriptors requires Object.getOwnPropertyDescriptor');
	}

	var O = ToObject(value);
	return reduce(
		getAll(O),
		function (acc, key) {
			var descriptor = $gOPD(O, key);
			if (typeof descriptor !== 'undefined') {
				CreateDataProperty(acc, key, descriptor);
			}
			return acc;
		},
		{}
	);
};
