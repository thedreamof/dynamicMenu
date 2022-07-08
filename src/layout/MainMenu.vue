<template>
    <nav class="novo-navbar">
        <ul class="menu is-flex" v-for="menu in menuList" :key="menu">
            <li class="menu-item" v-for="items in menu" :key="items">
                <a>{{items.name}}</a>
                <ul class="menu" v-if="items.subMenu.length">
                    <li class="menu-item" v-for="item in items.subMenu" :key="item">
                        <a>{{item.name}}</a>
                        <ul class="menu" v-if="item.subMenu.length">
                            <li class="menu-item" v-for="ite in item.subMenu" :key="ite">
                                <a>{{ite.name}}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
  
        <!-- <ul class="menu is-flex" v-for="menu in menuList" :key="menu">
            <MenuCreator v-if="menu" :menu="menu" />
        </ul> -->
    </nav>
</template>

<script setup lang="ts">
import api from '@/api/api';
import { ref } from 'vue';
// import MenuCreator from './MenuCreator.vue';


// --- VARIABLES
const menuList = ref<Array<any>>([]);

// --- FUNCTIONS
const buildMenu = async () => {
    const res: any = await api.getMenu();
    menuList.value = buildSubMenu(res.lista);
};

const buildSubMenu = (list: Array<any>) => {
    const menuList = list.map((data) => {
        const items = Object.keys(data);
        const subMenu: any = items.map(element => {
            const menu = data[element].length ? buildSubMenu(data[element]) : [];
            const itemMenu = {
                name: element.replace('_', ' '),
                subMenu: menu.length ? menu[0] : []
            }
            return itemMenu;
        });
        return subMenu;
    });
    return menuList;
};


// Initialized functions
buildMenu();

</script>

<style lang="scss" scoped>
.novo-navbar {
    margin: 0px 10px;
    text-transform: capitalize;
}


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
</style>