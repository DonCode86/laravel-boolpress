<template>
    <div class="container">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
        <p>{{ post.category }}</p>
        <div class="mt-5">
            <router-link :to="{ name: 'home' }">Home Page</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "SinglePost",
    data() {
        return {
            post: null,
        };
    },
    created() {
        axios.get(`/api/posts/${this.$route.params.slug}`).then((response) => {
            this.post = response.data;
        });
    },
};
</script>

<style></style>
