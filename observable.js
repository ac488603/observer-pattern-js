const observer = require('./observer');

function observable() {
    const obj = {};
    obj.subscribers = [];
    obj.addObserver = (observer) => {
        obj.subscribers.push(observer);
    };
    obj.removeObserver = (observer) => {
        obj.subscribers = obj.subscribers.filter(obsvr => obsvr !== observer );
    };
    obj.notify = (message) => {
        obj.subscribers.forEach( sub => sub.receive(message))
    }
    return obj;
}

module.exports = observable;