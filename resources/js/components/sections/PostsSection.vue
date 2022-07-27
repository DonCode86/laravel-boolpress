<template>
    <section class="posts">
        <div class="container">
            <ul class="row">
                <li class="col-4 mb-5" v-for="post in posts" :key="post.slug">
                    <BaseCard :title="post.title" :content="post.content" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import BaseCard from "../common/BaseCard.vue";
export default {
    name: "PostsSection",
    data() {
        return {
            posts: [],
        };
    },
    components: {
        BaseCard,
    },
    created() {
        axios
            .get("/api/posts")
            .then((response) => {
                this.posts = response.data;
            })
            .catch((e) => {
                console.log(e);
            });
    },
};
</script>

<style lang="scss" scoped>
.posts {
    background-color: var(--bg-section-light);
    padding: 3.125rem 0;
    ul {
        padding: 0;
        list-style: none;
    }
}
</style>
