<template>
    <div class="container">
        <h1>Page not found!</h1>
        <p>
            <router-link :to="{ name: 'home' }">
                Torna all'home Page</router-link
            >
        </p>
    </div>
</template>

<script>
export default {
    name: "NotFound",
};
</script>

<style></style>
