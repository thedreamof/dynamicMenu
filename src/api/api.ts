import menuService from './servicio.json';

export default {
    async getMenu(): Promise<Array<any>> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(menuService), 2000);
        });
    }

}