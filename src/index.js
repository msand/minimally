// @flow
/*::
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
type Model<K = string | number, V = any> = {
  get: K => V,
  on: (K, EventHandler<V>) => void,
  off: (K, EventHandler<V>) => void,
  set: (K, V) => void,
};
*/
/** minimally: Minimal key-value store and event subscription.
 *  @name minimally
 *  @returns {minimally}
 */
export default function minimally /*::<K, V>*/(
  handlers /*: ?EventHandlerMap<K, V> */,
  initialMap /*: ?Map<K, V> */,
) /*: Model<K, V> */ {
  const on /*: EventHandlerMap<K, V> */ =
    /* :: {} || */ handlers || Object.create(null);
  const map /*: Map<K, V> */ = /* :: {} || */ initialMap || Object.create(null);
  return {
    /**
     * Get current value for key
     *
     * @param  {String|Number} key	Key for which to lookup value
     * @returns {any}
     * @memberOf minimally
     */
    get: (key /*: K */) /*: V */ => map[key],

    /**
     * Subscribe to events for key with event handler
     *
     * @param  {String|Number} key	Type of event to listen for
     * @param  {Function} fn Function to call in response to given event
     * @memberOf minimally
     */
    on: (key /*: K */, fn /*: EventHandler<V> */) /*: void */ => {
      (on[key] || (on[key] = [])).push(fn);
    },

    /**
     * Release subscription for key and event handler
     *
     * @param  {String|Number} key	Type of event to unregister `fn` from
     * @param  {Function} fn Handler function to remove
     * @memberOf minimally
     */
    off: (key /*: K */, fn /*: EventHandler<V> */) /*: void */ => {
      if (on[key]) {
        on[key].splice(on[key].indexOf(fn) >>> 0, 1);
      }
    },

    /**
     * Set value for key and dispatch event to subscribers
     *
     * @param {String|Number} key  The event type to invoke
     * @param {any} [val] Any value (object is recommended and powerful), passed to each handler
     * @memberOf minimally
     */
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
