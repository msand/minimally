/*eslint no-console: ["error", { allow: ["assert"] }] */
import minimally from './src/index.js';

const handlers = /* :: {} || */ Object.create(null);
const key = 'testKey';
const value = 'testValue';
const m /*: Model<> */ = minimally(handlers);

let called = false;
let calledWithValue = false;

const listener = val => {
  called = true;
  calledWithValue = val === value;
};

m.on(key, listener);

console.assert(handlers[key].length === 1, 'subscribed');

console.assert(m.get(key) === undefined, 'getBeforeSet');

m.set(key, value);

console.assert(called, 'called');

console.assert(calledWithValue, 'calledWithValue');

console.assert(m.get(key) === value, 'getAfterSet');

m.off(key, listener);

console.assert(handlers[key].length === 0, 'released');
