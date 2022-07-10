<template>
    <nav class="navbar">
        <div class="loading" v-if="loading">Loading...</div>
        <ul v-else class="menu is-flex" v-for="menu in menuList" :key="menu">
            <li class="menu-item" v-for="items in menu" :key="items">
                <a>{{ items.name }}</a>
                <ul class="sub-menu" v-if="items.subMenu.length">
                    <li class="menu-item" v-for="item in items.subMenu" :key="item">
                        <a>{{ item.name }}</a>
                        <ul class="sub-menu" v-if="item.subMenu.length">
                            <li class="menu-item" v-for="ite in item.subMenu" :key="ite">
                                <a>{{ ite.name }}</a>
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
const loading = ref(true);

// --- FUNCTIONS
const buildMenu = async () => {
    loading.value = true;
    const res: any = await api.getMenu();
    menuList.value = buildSubMenu(res.lista);
    loading.value = false;
};

const buildSubMenu = (menu: Array<any>) => {
    const menuList = menu.map((menuItem) => {
        const menuNames = Object.keys(menuItem);
        const subMenu: Array<any> = menuNames.map(name => {
            const itemMenu = {
                name: name.replace('_', ' '),
                subMenu: buildSubMenu(menuItem[name]).flat() || [],
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
.loading {
    padding: 10px;
}

.novo-navbar {
    margin: 0px 10px;
    text-transform: capitalize;
}


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