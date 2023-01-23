<template>
    
</template>

<script lang="ts">
import { useUserStore } from '@/stores/user'

export default {
    name: 'FaceitLoginHook',
    setup() {
        const user = useUserStore();
        return {
            user
        }
    },
    mounted() {
        const route = useRoute()
        var faceitToken = route.query.code?.toString();
        var newRoute = window.location.protocol + "//" + window.location.host + route.query.state

        if (faceitToken) {
            this.user.setFaceitToken(faceitToken);
        }

        window.location.href = newRoute;
    }
}
</script>