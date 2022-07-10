<template>
    <ul v-bind="$attrs">
        <li class="menu-item" v-for="items in menu" :key="items">
            <a>{{ items.name }}</a>
            <MenuCreator class="sub-menu" v-if="items.subMenu.length" :menu="items.subMenu"/>
        </li>
    </ul>
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

.menu,
.sub-menu {
    .menu-item {
        background: white;
        padding: 10px;
        cursor: pointer;

        a {
            display: block;
            color: black;
            text-transform: capitalize;
        }

        &>.sub-menu {
            display: none;
        }

        &:hover {
            border-bottom: 2px solid darkblue;
            position: relative;

            &>a {
                color: darkblue;
            }

            &>.sub-menu {
                display: block;
                width: 100%;
                min-width: 200px;
                position: absolute;
                top: 52px;
                left: 0;
            }
        }
    }
}


.sub-menu .menu-item {
    border: 1px solid darkgray;

    a {
        color: gray;
    }

    &:hover {
        border-bottom: 1px solid darkgray;

        a {
            color: darkblue;
        }

        &>.sub-menu {
            top: 0;
            left: 200px;
        }
    }
}
</style>