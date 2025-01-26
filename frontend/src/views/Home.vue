<script setup>
</script>

<script>
export default {
    name: 'Home',
};
</script>

<template>
    <main>
        <div id="app">
            <nav class="border">
                <div class="d-flex bd-highlight mb-3">
                    <div class="p-2 bd-highlight">
                        <router-link to="/">Main</router-link>
                    </div>
                    <div class="ms-auto p-2 bd-highlight">
                        <router-link to="/account">회원가입</router-link>
                    </div>
                </div>
            </nav>
            <router-view></router-view>
        </div>
    </main>
</template>

<style scoped>

</style>