window.MyComponent = {
  template: `
    <q-card class="q-pa-md bg-grey-2">
      <q-card-section>
        <div class="text-h6">I'm MyComponent!</div><br>
        <q-btn label="Click me" color="primary" @click="clicked" />
      </q-card-section>
    </q-card>
  `,
  setup() {
    const clicked = () => Quasar.Notify.create("Clicked!")
    return { clicked }
  }
}