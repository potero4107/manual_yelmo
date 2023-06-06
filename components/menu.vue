<script setup>
import Logo from './logo.vue';
</script>

<template>
    <aside class="sidebar">
        <div class="side_wrapper">
            <div class="logo">
                <div class="svg">
                    
                    <div class="first_level">

                        <NuxtLink to="/">
                            <Logo />
                        </NuxtLink>

                    </div>
                </div>
            </div>
            <div class="navigation">
                <div class="first_level">

                    <NuxtLink to="/logotipo">Logotipo</NuxtLink>

                </div>
                <div class="first_level">

                    <NuxtLink to="/color">Color</NuxtLink>

                </div>

                <div class="first_level">

                    <NuxtLink to="/tipografia">Tipografía</NuxtLink>

                </div>
                <div class="first_level">

                    <NuxtLink to="/tratamiento">Tratamiento de imagen</NuxtLink>

                </div>
                <div class="first_level">

                    <NuxtLink to="/reticula">Retícula</NuxtLink>

                </div>
                <div class="first_level">

                    <NuxtLink to="/estructura">Estructura compositiva</NuxtLink>

                </div>
                <div class="first_level">

                    <NuxtLink to="/aplicaciones">Aplicaciones</NuxtLink>

                </div>
                <div class="first_level">

                    <NuxtLink to="/usosmalos">Usos incorrectos</NuxtLink>

                </div>

            </div>
        </div>
    </aside>
</template>

<style lang="sass" scoped>
.sidebar
    @apply bg-slate-100 col-start-1 col-end-2 top-0 min-h-screen flex items-start
    .side_wrapper
        @apply overflow-auto top-0 sticky w-full
        .logo
            @apply bg-[#FD4E62] flex px-4 items-center h-[60px]
            

        .navigation
            @apply p-4 flex flex-col m-2 divide-y divide-slate-300
            .first_level
                @apply text-slate-600 font-semibold py-2
                &:hover
                    @apply text-slate-900


</style>