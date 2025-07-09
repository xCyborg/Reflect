MyComponent = {
  template: `
    <q-card class="q-pa-md bg-grey-2">
      <q-card-section>
        <div class="text-h6">I'm My own Component!</div><br>
      </q-card-section>
      <q-card-section>
        <q-btn label="Declenchez moi" color="primary" @click="clicked" />
      </q-card-section>
    </q-card>
  `,
  setup() {
    const clicked = () => Quasar.Notify.create("Clicked!")
    return { clicked }
  }
}