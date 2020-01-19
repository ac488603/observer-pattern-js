const observer =  require('./observer');
const observable = require('./observable');

const pewdiepie = observable();

const adam = observer('adam');
const malachi =  observer('malachi');
const alan = observer('alan');

adam.subscribe(pewdiepie);
malachi.subscribe(pewdiepie);
alan.subscribe(pewdiepie);

pewdiepie.notify('Hello '); 

malachi.unsubscribe(pewdiepie);

pewdiepie.notify('Welcome ');

adam.unsubscribe(pewdiepie);

pewdiepie.notify('how sad ');


