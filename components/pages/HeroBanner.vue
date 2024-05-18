<template>
   <section class="flex items-center sm:items-start justify-center min-h-[calc(100vh-var(--header-height))] sm:pt-10 md:pt-20">
      <div class="flex flex-col items-center gap-y-6 sm:gap-y-8">
         <div class="flex items-center gap-x-2 rounded-full border bg-muted px-3 py-1.5">
            <div class="h-3 w-3 rounded-full bg-blue-500"></div>
            <span class="text-xs sm:text-sm">Amaliyotga xush kelibsiz, Talaba</span>
         </div>
         <div class="flex flex-col items-center gap-y-3 sm:gap-y-6">
            <h1 class="text-center text-2xl font-bold sm:text-6xl sm:leading-snug"><span class="text-primary">PRAKTIKUM</span> - Oliy ta’lim amaliyot jarayonlarini boshqarish axborot tizimi</h1>
            <p class="text-center text-sm text-muted-foreground sm:text-xl max-w-[700px] mx-auto">
               Ushbu axborot tizimi “Ma’muriy boshqaruv”, “Amaliyot o‘quv jarayoni”, “Ilmiy faoliyat” va “Moliyaviy boshqaruv” modullarini o‘z ichiga olgan.
            </p>
         </div>
         <div class="flex items-center gap-x-4">
            <NuxtLink href="/">
               <Button class="rounded-full h-12" size="lg">Amaliyot kundaligi</Button>
            </NuxtLink>
         </div>
      </div>
   </section>
</template>

<script setup></script>
