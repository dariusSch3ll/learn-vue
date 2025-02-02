const app = Vue.createApp({
  data() {
    return {
      counter: 7,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    addCounter(num) {
      this.counter = this.counter + num
    },
    reduceCounter(num) {
      this.counter = this.counter - num
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName
    },
    submitForm() {
      alert('submitted')
    },
    confirmInput() {
      this.confirmedName = this.name
    }
  },
});

app.mount('#events');
