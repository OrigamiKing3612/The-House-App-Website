<template>
    <div class="floating">
        <div class="tab-view">
            <NuxtLink to="/" :class="{ active: route.path === '/' }">
                <svg width="30" height="30" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.85075 16.9209L22.0063 0.773244C23.1431 -0.237886 24.8569 -0.237887 25.9937 0.773243L44.1493 16.9209L47.3471 19.8314C48.6386 21.007 47.807 23.1562 46.0606 23.1562V23.1562C45.005 23.1562 44.1493 24.0119 44.1493 25.0675V43C44.1493 44.6569 42.8061 46 41.1493 46H31.6632C31.1095 46 30.6612 45.55 30.6633 44.9963L30.7336 26.1674C30.7398 24.5062 29.3949 23.1562 27.7336 23.1562H20.1697C18.5129 23.1562 17.1697 24.4993 17.1697 26.1562V45C17.1697 45.5523 16.722 46 16.1697 46H6.85075C5.19389 46 3.85075 44.6569 3.85075 43V24.6972C3.85075 23.8461 3.16084 23.1562 2.30979 23.1562V23.1562C0.432415 23.1562 -0.461584 20.8458 0.926818 19.5821L3.85075 16.9209Z"
                        fill="currentColor" />
                </svg>
            </NuxtLink>
            <NuxtLink to="/bugs" :class="{ active: route.path === '/bugs' }">
                <BugIcon style="width: 30px; height: 30px;" />
            </NuxtLink>
            <!-- <NuxtLink to="/privacy" :class="{ active: route.path === '/privacy' }"> -->
            <!--     <LockIcon style="width: 30px; height: 30px;" /> -->
            <!-- </NuxtLink> -->
            <!-- <NuxtLink to="/terms" :class="{ active: route.path === '/terms' }"> -->
            <!--     <ShieldIcon style="width: 30px; height: 30px;" /> -->
            <!-- </NuxtLink> -->
        </div>
    </div>
    <div class="sidebar">
        <SidebarButton :value="sidebar_open" v-model="sidebar_open" />
        <Sidebar :value="sidebar_open" v-model="sidebar_open" />
    </div>
</template>

<script setup lang="ts">
const route = useRoute();

const sidebar_open = ref(false);
</script>

<style lang="scss" scoped>
.floating {
    position: fixed;
    bottom: 10px;
    background: none;
    text-align: center;
    padding: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1; //makes it under the add points button
    transition: display 0.1s ease;

    .tab-view {
        width: min-content;
        display: flex;
        justify-content: center;
        background-color: var(--main-background);
        border-radius: 20px;
        border: 2px solid var(--text);
        box-shadow: 5px 5px 0px var(--primary);
        padding: 5px 20px;
        margin: auto;

        a {
            padding: 5px 30px;
            color: var(--text);
            background-color: var(--main-background);
            border-radius: 15px;
            text-decoration: none;
            transition: background-color 0.1s ease;
            margin: 3px;

            &:hover {
                background-color: var(--background-primary);
            }

            &.active {
                background-color: var(--background-primary);

                path {
                    color: var(--primary);
                }
            }
        }
    }
}

@media (max-width: 450px) {
    .floating {
        display: none;
    }
}

@media (min-width: 451px) {
    .sidebar {
        display: none;
    }
}
</style>
