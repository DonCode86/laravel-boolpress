<template>
    <div class="card">
        <h3>{{ title }}</h3>
        <div class="card-content">
            {{ content }}
        </div>
        <a href="#">Leggi di più</a>
    </div>
</template>

<script>
export default {
    name: "BaseCard",
    props: {
        title: {
            type: String,
        },
        content: {
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
.card {
    background-color: #fff;
    border-radius: 1.25rem;
    padding: 0.625rem;
    box-shadow: 0 0 5px 2px #ddd;
}
</style>
