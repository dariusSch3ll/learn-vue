const app = Vue.createApp({
  data() {
    return {
      name: "Darius",
      age: 29,
      profilePic: "https://avatars.githubusercontent.com/u/118527051?v=4",
    };
  },
  methods: {
    outputAgeInFiveYears() {
      return this.age + 5;
    },
    outputRandomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
