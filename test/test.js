import minimally from '../src/main.js';

export default function test() {
  const handlers = /* :: {} || */ Object.create(null);
  const key = 'testKey';
  const value = 'testValue';
  const m /*: Model<> */ = minimally(handlers);

  let called = false;
  const listener = val => {
    called = true;
  };

  m.on(key, listener);

  const subscribed = handlers[key].length === 1;

  const getBeforeSet = m.get(key) === undefined;

  m.set(key, value);

  const getAfterSet = m.get(key) === value;

  m.off(key, listener);

  const released = handlers[key].length === 0;

  const assertions = {
    subscribed,
    getBeforeSet,
    called,
    getAfterSet,
    released,
  };

  return Object.keys(assertions).every(key =>
    console.assert(assertions[key], key),
  );
}

test();
