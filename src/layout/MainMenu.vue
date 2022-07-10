<template>
    <nav class="navbar">
        <div class="loading" v-if="loading">Loading...</div>
        <MenuCreator class="menu is-flex" :menu="menu" v-for="menu in menuList" :key="menu" />
    </nav>
</template>

<script setup lang="ts">
import api from '@/api/api';
import { ref } from 'vue';
import MenuCreator from './MenuCreator.vue';


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
</style>