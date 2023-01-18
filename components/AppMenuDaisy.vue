<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </label>
                <ul
                    tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li><nuxt-link to="/login">Login</nuxt-link></li>
                    <li tabindex="0">
                        <nuxt-link class="justify-between">
                            Projects
                            <svg
                                class="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                            </svg>
                        </nuxt-link>
                        <ul class="p-2">
                            <li>
                                <nuxt-link to="/supabasetest">Supabasetest</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/storagetest">Storagetest</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/calculator">Calculator</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/weather">Weather</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/gallery">Gallery</nuxt-link>
                            </li>
                            <li><nuxt-link to="/form">Form</nuxt-link></li>
                            <li><nuxt-link to="/text">Text</nuxt-link></li>
                        </ul>
                    </li>
                    <li><nuxt-link to="/aboutPage">About</nuxt-link></li>
                </ul>
            </div>
            <button class="btn btn-ghost normal-case text-xl">
                <nuxt-link to="/">Selfhosting.ninja</nuxt-link>
                <Icon name="noto:ninja-light-skin-tone" />
            </button>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
                <!-- <li><nuxt-link to="/login">Login</nuxt-link></li> -->
                <li tabindex="0">
                    <nuxt-link>
                        Projects
                        <svg
                            class="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </nuxt-link>
                    <ul class="p-2 bg-base-300">
                        <li>
                            <nuxt-link to="/supabasetest">Supabasetest</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/storagetest">Storagetest</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/calculator">Calculator</nuxt-link>
                        </li>
                        <li><nuxt-link to="/weather">Weather</nuxt-link></li>
                        <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
                        <li><nuxt-link to="/form">Form</nuxt-link></li>
                        <li><nuxt-link to="/text">Text</nuxt-link></li>
                        <li>
                            <nuxt-link to="/countrygame">Countrygame</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/restcountries">Restcountries</nuxt-link>
                        </li>
                    </ul>
                </li>
                <li><nuxt-link to="/aboutPage">About</nuxt-link></li>
            </ul>
            <li>
                <span v-if="user"> Logged in as: {{ user.email }} </span>
            </li>
        </div>
        <div class="navbar-end">
            <li>
                <button v-if="user" class="btn" @click="doSignOut">Log out</button>
                <button v-else class="btn">
                    <nuxt-link to="/login">Log in</nuxt-link>
                </button>
            </li>
        </div>
        <div>
            <button class="ml-5" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
                <svg
                    v-if="$colorMode.value == 'dark'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gray-50"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()

const doSignOut = async () => {
    await client.auth.signOut()
    router.replace('/login')
}

type Theme = 'light' | 'dark'
const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme
}
</script>

<style></style>
