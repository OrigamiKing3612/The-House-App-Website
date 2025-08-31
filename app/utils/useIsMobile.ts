export function useIsMobile() {
    const isMobile = useScreenWidth(450);
    return isMobile;
}


export function useScreenWidth(width: number) {
    const isScreenWidth = ref(false);

    const check = () => {
        isScreenWidth.value = window.innerWidth <= width;
    };

    onMounted(() => {
        check();
        window.addEventListener('resize', check);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', check);
    });

    return isScreenWidth;
}

