<template>
    <section class="app-main">
        <router-view :key="key" />
    </section>
</template>

<script>
export default {
    name: "AppMain",
    computed: {
        key() {
            return this.$route.path;
        }
    }
};
</script>

<style scoped>
  .app-main {
    padding-top: 3.8rem;
  }
</style>
