window.onload = function () {
  const { createApp } = Vue;

  const appData = () => ({
    clicked: false, // STATE
    lorem: null,   
  });

  const app = createApp({
    data: appData, 
    components: { MyComponent: window.MyComponent},
    methods: {fetchQuote}
  });

  app.use(Quasar);

  app.mount('#app');
  document.documentElement.style.visibility = 'visible'; // remove FOUC


  async function fetchQuote() {
    console.log('fetchQuote called');
    const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: {'X-Api-Key': 'uD+lwzckMKXQfGcqRoIvjg==iQTwRGi1F2iFNLII'}
    });
    const data = await res.json();
    this.lorem = data[0];
  }
};
