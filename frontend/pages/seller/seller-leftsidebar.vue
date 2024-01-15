<template>
<div>
    <div class="user_sidebar">
        <div class="user_page_list">
            <ul>
                <li :class="{ active: $route.path === '/seller/seller-products' }">
                    <Nuxt-link to="/seller/seller-products" exact>Products </Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/seller/seller-products-post' }">
                    <Nuxt-link to="/seller/seller-products-post" exact>Add Products </Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/seller/seller-orders' }">
                    <Nuxt-link to="/seller/seller-orders" exact>Orders </Nuxt-link>
                </li>
                <!-- <li :class="{ active: $route.path === '/seller/seller-wallet' }">
                    <Nuxt-link to="/seller/seller-wallet" exact>Wallet</Nuxt-link>
                </li> -->
                <li :class="{ active: $route.path === '/seller/seller-profile' }">
                    <Nuxt-link to="/seller/seller-profile" exact>Profile information</Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/seller/seller-account-setting' }">
                    <Nuxt-link to="/seller/seller-account-setting" exact>Account Settings</Nuxt-link>
                </li>
                <!-- <li :class="{ active: $route.path === '/seller/seller-message' }">
                    <Nuxt-link to="/seller/seller-message" exact>Massages</Nuxt-link>
                </li> -->
                <li>
                    <a href="#" @click="logout">LogOut </a>
                </li>
            </ul>
        </div>

    </div>
</div>
</template>

<script>
export default {
    middleware: 'auth',
    methods: {

        logout() {
            this.$auth.logout();
            localStorage.removeItem('jwtToken');
            this.$router.push('/');
        },
    }
}
</script>

<style scoped>
.loading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

/* For Loader */
.loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
}

.loader-text {
    margin: 0;
    /* Remove default margin */
}

.loader-top {
    top: 0;
}

.loader-bottom {
    bottom: 0;
}
</style>

<style>

</style>
