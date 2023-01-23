<template>
    <button class="button Faceit" v-on:click="loginWithFaceit">Connect with FACEIT</button>
</template>

<script>
export default {
    name: 'ConnectFaceit',
    methods: {
        loginWithFaceit() {
            var encodedPath = encodeURIComponent(this.$route.path)
            window.location.href = `https://accounts.faceit.com/?response_type=code&client_id=76d40002-e72d-4c5c-b6e8-c56afd7e601c&redirect_popup=true&state=${encodedPath}`
        }
    }
}
</script>