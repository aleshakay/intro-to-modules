console.log('Intro-to-modules')
//importing an object from the file component/store.js and name it store. 

import store from './components/store.js'

const init = () => {
    store.makeStore();
};

init();