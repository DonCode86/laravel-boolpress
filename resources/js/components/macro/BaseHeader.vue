<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>Boolpress</h1>
                </div>
                <div class="col">
                    <nav>
                        <ul>
                            <li>
                                <router-link :to="{ name: 'home' }"
                                    >Home</router-link
                                >
                            </li>
                            <li>
                                <router-link :to="{ name: 'about' }"
                                    >Chi Siamo</router-link
                                >
                            </li>
                            <li><a href="/admin/home">Area Riservata</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "BaseHeader",
};
</script>

<style>
* {
    text-align: center;
}

li {
    list-style: none;
}
</style>
