import { Manager } from 'socket.io-client';

export const socket = new Manager(process.env.REACT_APP_API_URL || '', {
  extraHeaders: {
    authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
  },
  autoConnect: false,
});

export const socketEvents = socket.socket('/events');

socket.open((err) => {
  if (err) {
    // an error has occurred
    console.log('first', err.message);
  } else {
    // the connection was successfully established
    console.log('connection was successfully established');
  }
});
