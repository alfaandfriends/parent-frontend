<template>
    <div>
        <Header />
        <Navigation />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        Navigation,
        Footer,
    },
}
</script>

<style>
/* Disable mobile browser click/touch/tap feedback box */
body {
    -webkit-tap-highlight-color: transparent;
}
</style>