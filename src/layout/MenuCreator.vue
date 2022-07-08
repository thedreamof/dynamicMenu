<template>
    <!-- <ul class="menu is-flex" v-for="items in menu" :key="items"> -->
    <li class="menu-item" v-for="items in menu" :key="items">
        <a>{{ items.name }}</a>

        <template v-if="items.subMenu">
            <ul class="menu" v-for="item in items.subMenu" :key="item">
                <li class="menu-item">{{item.name}}</li>
                <MenuCreator :menu="item" />
            </ul>
        </template>
    </li>
    <!-- </ul> -->
</template>

<script setup lang="ts">
const props = defineProps<{
    menu: Array<any> | object,
}>()

console.log('menu :>> ', props.menu);
</script>

<style lang="scss">
.menu {
    position: relative;
}

.menu .menu-item a {
    background: white;
    color: black;
    padding: 10px;
    display: block;

    &:hover {
        // border-bottom: 2px solid darkblue;
        box-shadow: inset 0 -3px 0 0 darkblue;
    }
}


.menu .menu-item .menu {
    display: none;
    position: absolute;
    // top: 50px;
    width: 100%;
    max-width: 200px;
}

.menu .menu-item {
    &:hover>.menu {
        display: block;
    }
}

// .menu-item {
//     background: red;
//     &:hover>.menu {
//         display: block;
//     }
// }
</style>