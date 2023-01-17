<template>
    <div id="faceitLogin"></div>
</template>

<script>
export default {
    name: 'ConnectFaceit',
    mounted() {
        if (!process.server && !window.FACEIT) {
            var initParams = {
                client_id: '98989178-f5ff-4375-be77-1d6c8ac9f81d',
                response_type: '200',
                state: 'informationYouWantPassedToTheRedirectUri',
                redirect_popup: true,
                debug: true
            };
            window.FACEIT.init(initParams);     
        }
    }
}
</script>