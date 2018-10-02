// @flow
/*::
type Key = string | number;
// A map from keys to values.
type Map<K, V> = {
  [key: K]: V,
};
// Change event handlers can return anything (ignored, but exceptions aren't caught)
type EventHandler<V> = (value?: V) => any;
// An array of all currently registered event handlers for a key
type EventHandlerList<V> = Array<EventHandler<V>>;
// A map from keys to corresponding event handlers.
type EventHandlerMap<K, V> = {
  [key: K]: EventHandlerList<V>,
};
type Model<K = Key, V = any> = {
	get: K => V,
	on: (K, EventHandler<V>) => void,
	off: (K, EventHandler<V>) => void,
	set: (K, V) => void,
}
Inspired by mitt
*/
export function minimally /*::<K, V>*/(
  handlers /*: ?EventHandlerMap<K, V> */,
  initialMap /*: ?Map<K, V> */,
) /*: Model<K, V> */ {
  const on /*: EventHandlerMap<K, V> */ =
    /* :: {} || */ handlers || Object.create(null);
  const map /*: Map<K, V> */ = /* :: {} || */ initialMap || Object.create(null);
  return {
    // Get current value for key
    get: (key /*: K */) /*: V */ => map[key],
    // Subscribe to changes for key with event handler
    on: (key /*: K */, fn /*: EventHandler<V> */) /*: void */ => {
      (on[key] || (on[key] = [])).push(fn);
    },
    // Release subscription for key and event handler
    off: (key /*: K */, fn /*: EventHandler<V> */) /*: void */ => {
      if (on[key]) {
        on[key].splice(on[key].indexOf(fn) >>> 0, 1);
      }
    },
    // Set value for key and dispatch change event to subscribers
    set: (key /*: K */, val /*: V */) /*: void */ => {
      map[key] = val;
      if (on[key]) {
        on[key].slice().forEach(h => {
          h(val);
        });
      }
    },
  };
}

export default minimally;
