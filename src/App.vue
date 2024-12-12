<template>
  <div id="app">
    <nav>
      <router-link to="/">My tasks</router-link>
      <router-link to="/create">Create new Task</router-link>
      <router-link to="/settings">Settings</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
nav {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  background: #f4f4f4;
  padding: 10px;
}

nav a {
  text-decoration: none;
  color: darkgreen;
  font-weight: bold;
}

nav a.router-link-active {
  color: darkblue;
}
</style>
