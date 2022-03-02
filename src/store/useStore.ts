import { defineStore } from "pinia";

export default defineStore('main', {
  state: () => ({
    counter: 0,
    name: "user",
    isAdmin: true,
    loadding: false,
    user: {
      username: "user",
      password: "password"
    }
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    doublePlusOne(): number {
      return this.counter * 2 + 1
    }
  },
  actions: {
    showLoading() {
      console.log("2")
      this.loadding = true
    },
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    }
  }
})