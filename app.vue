<template>
    <NuxtLayout>
        <div class="scrollbar-thumb-blue-700 h-screen w-screen">
            <NuxtLoadingIndicator />
            <OgImageScreenshot />
            <div class="sticky top-0">
                <AppMenuDaisy />
            </div>
            <NuxtPage />
            <AppFooter />
        </div>
    </NuxtLayout>
</template>

<!------------------------------------------------------
<style lang="scss">
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

:root {
    --color--primary--h: 195deg;
    --color--primary--s: 77%;
    --color--primary--l: 39%;
}
</style>
-->
