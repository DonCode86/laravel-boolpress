<template>
    <div class="container">
        <!-- <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
        <h3>{{ post.user.name }}</h3> -->
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
        // console.log(this.$route.params.slug);
        axios.get("/api/posts/${this.$route.params.slug}").then((response) => {
            // this.post = response.data;
            console.log(response);
        });
    },
};
</script>

<style></style>
