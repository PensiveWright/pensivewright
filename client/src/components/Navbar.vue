<template>
  <div>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Posts' }">Stories</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
  </nav>
  </div>
</template>
<script>
  export default {
    name: 'Navbar'
  };
</script>