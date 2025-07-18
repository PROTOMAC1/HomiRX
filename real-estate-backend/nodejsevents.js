const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
  setTimeout(()=>{
      console.log('an event occurred! haiii haiii');
  }, 3000);
});
myEmitter.emit('event');