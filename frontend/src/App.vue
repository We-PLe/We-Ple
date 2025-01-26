<template>
    <AppHeader/>
    <Home />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import Home from './views/Home.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        Home,
    },
};
</script>

<style scoped>
</style>
