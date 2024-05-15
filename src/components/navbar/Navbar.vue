<script>
let items = ["Home", "Gallery", "Gigs","About"]
</script>

<template>
    <ul>
        <li v-for="item in items">
            {{ item }}
        </li>
    </ul>
</template>

<style></style>