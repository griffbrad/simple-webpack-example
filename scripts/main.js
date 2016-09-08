var Delta = {
    'common':    require('./common'),
    'patient':   require('./patient'),
    'physician': require('./physician')
};

var domBasedRouting = require('./util/dom-based-routing');
domBasedRouting.init(Delta);
