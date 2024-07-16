const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      courseGoal: "Finish the course and learn Vue!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal: function () {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal"); // this is the id of the div in the html file
