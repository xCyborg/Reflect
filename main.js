const { createApp, ref } = Vue;

const App = {
  components: { MyComponent },
  setup() {
    const clicked = ref(false);
    const lorem = ref(null);

    async function fetchQuote() {
      const result = await axios.get('https://api.api-ninjas.com/v1/quotes',
        {headers: {'X-Api-Key': 'uD+lwzckMKXQfGcqRoIvjg==iQTwRGi1F2iFNLII'} });
      lorem.value = result.data[0];
    }

    return { clicked, lorem, fetchQuote};
  }
};

// Mount the app
createApp(App).use(Quasar).mount('#app');

// Optional: Remove Flash Of Unstyled Content
document.documentElement.style.visibility = 'visible';
