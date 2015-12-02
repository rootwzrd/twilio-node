'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the OriginationUrlContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} trunkSid - The trunk_sid
 * @param {sid} sid - The sid
 *
 * @returns {OriginationUrlContext}
 */
function OriginationUrlContext(version, trunkSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    trunkSid: trunkSid,
    sid: sid,
  };
  this._uri = _.template('/Trunks/<% trunk_sid %>/OriginationUrls/<% sid %>', this._solution);
}

/**
 * Fetch a OriginationUrlInstance
 *
 * @returns Fetched OriginationUrlInstance
 */
OriginationUrlContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new OriginationUrlInstance(
    this._version,
    payload,
    this._solution.trunkSid,
    this._solution.sid,
  );
};

/**
 * Deletes the OriginationUrlInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
OriginationUrlContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

/**
 * Update the OriginationUrlInstance
 *
 * @param string [opts.weight] - The weight
 * @param string [opts.priority] - The priority
 * @param string [opts.enabled] - The enabled
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.sipUrl] - The sip_url
 *
 * @returns Updated OriginationUrlInstance
 */
OriginationUrlContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Weight': weight,
    'Priority': priority,
    'Enabled': enabled,
    'Friendlyname': friendlyName,
    'Sipurl': sipUrl,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return new OriginationUrlInstance(
    this._version,
    payload,
    this._solution.trunkSid,
    this._solution.sid
  );
};


function OriginationUrlInstance() {
}

Object.defineProperty(OriginationUrlInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new OriginationUrlContext(
        this._version,
        this._solution.trunkSid,
        this._solution.sid
      );
    return this._context;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype, 'trunkSid', {
  get: function() {
    return this._properties.trunkSid;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype, 'weight', {
  get: function() {
    return this._properties.weight;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype, 'enabled', {
  get: function() {
    return this._properties.enabled;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype, 'sipUrl', {
  get: function() {
    return this._properties.sipUrl;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype, 'priority', {
  get: function() {
    return this._properties.priority;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype, 'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Initialize the OriginationUrlContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} trunkSid: The trunk_sid
 * @param {sid} sid: The sid
 *
 * @returns {OriginationUrlContext}
 */
OriginationUrlInstance.prototype.OriginationUrlInstance = function
    OriginationUrlInstance(version, payload, trunkSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      sid: payload.sid,
      trunkSid: payload.trunk_sid,
      weight: payload.weight,
      enabled: payload.enabled,
      sipUrl: payload.sip_url,
      friendlyName: payload.friendly_name,
      priority: payload.priority,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      url: payload.url,
  };

  // Context
  this._context = None;
  this._solution = {
    trunkSid: trunkSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a OriginationUrlInstance
 *
 * @returns Fetched OriginationUrlInstance
 */
OriginationUrlInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Deletes the OriginationUrlInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
OriginationUrlInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

/**
 * Update the OriginationUrlInstance
 *
 * @param string [opts.weight] - The weight
 * @param string [opts.priority] - The priority
 * @param string [opts.enabled] - The enabled
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.sipUrl] - The sip_url
 *
 * @returns Updated OriginationUrlInstance
 */
OriginationUrlInstance.prototype.update = function update(self, opts) {
  return this._proxy.update(
    opts
  );
};
