<template>
    <div>
        <BaseHeader />
        <BaseMain />
        <BaseFooter />
        <ul>
            <li v-for="post in posts" :key="post.slug">
                {{ post.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import BaseHeader from "../components/macro/BaseHeader.vue";
import BaseMain from "../components/macro/BaseMain.vue";
import BaseFooter from "../components/macro/BaseFooter.vue";
export default {
    name: "App",
    components: {
        BaseHeader,
        BaseMain,
        BaseFooter,
    },

    created() {
        axios
            .get("http://127.0.0.1:8000/api/posts")
            .then((response) => {
                this.posts = response.data;
            })
            .catch((e) => {
                console.log(e);
            });
    },
};
</script>

<style></style>
