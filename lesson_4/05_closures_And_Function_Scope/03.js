function startup() {
  let status = 'ready';

  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
// Is there a way to set the value of systemStatus to the value of the inner variable status without changing startup in any way?
let systemStatus = answer; // NO you cannot, `status` is a private variable aka private data