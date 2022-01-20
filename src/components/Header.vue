<template>
  <header>
    <RouterLink class="link" :to="{ name: 'home' }">Home</RouterLink>
    <br />
    <RouterLink class="link" :to="{ name: 'todo' }">Todo</RouterLink>
    <br />

    <RouterLink class="link" :to="{ name: 'slider' }">Slider</RouterLink>
    <br />
    <RouterLink class="link" :to="{ name: 'contact' }">Contact</RouterLink>
  </header>
</template>

<script>
  export default {
    methods: {},
  };
</script>

<style>
  header {
    margin-bottom: 1em;
    font-size: 0.5em;
    background: #eee;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }
  .link {
    text-decoration: none;
  }

  header .router-link-active {
    background: yellow;
  }
</style>
