const observable = require('./observable');

function observer(name) {
    const obj = {};
    obj.name = name
    obj.subscribe = (observable) => {
        observable.addObserver(obj);
     }; 
    obj.unsubscribe = (observable) => {
         observable.removeObserver(obj); 
     }; 
    obj.receive = (message) =>{
        console.log(message + obj.name);
     };
     return obj;
};

module.exports = observer;