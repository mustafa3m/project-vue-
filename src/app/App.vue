<template>
  <Header />
  <RouterView />
  <Slider />
  <Todo />
  <Contact />
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Slider from "../components/Slider.vue";
import Todo from "../components/Todo.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Slider,
    Todo,
    Contact,
    Footer,
  },
};
</script>

<style>
@import "../style/reset.css";
@import "../style/variables.css";
@import "../style/style.css";
</style>
