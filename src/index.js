import Pubsub from './pubsub.js';

document.getElementById('message-input').addEventListener('input', ev => {
  Pubsub.publish('input:message', ev.target.value);
});

Pubsub.subscribe('input:message', args => {
  const target = document.getElementById('reactive-message');
  target.innerHTML = args;
});
