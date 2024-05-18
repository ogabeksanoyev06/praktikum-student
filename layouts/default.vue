<script setup>
import AppHeader from '@/components/layouts/default/AppHeader.vue';
import AppFooter from '@/components/layouts/default/AppFooter.vue';
import { ScrollArea } from '@/components/ui/scroll-area';

const asideMenu = [
   {
      treeview: 'Amaliyot',
      value: 1,
      treeviewMenu: [
         {
            name: 'Amaliyot rejasi',
            route: ''
         },
         {
            name: 'Mening kundaligim',
            route: ''
         },
         {
            name: 'Mening Hisobotim',
            route: ''
         },
         {
            name: 'Amaliyot tarixi',
            route: ''
         }
      ]
   },
   {
      treeview: 'Talaba ma`lumotlari',
      value: 2,
      treeviewMenu: [
         {
            name: 'Ma`lumotnomalar',
            route: ''
         },
         {
            name: 'Shaxsiy ma`lumotlar',
            route: ''
         }
      ]
   },
   {
      treeview: 'Xabarlar',
      value: 3,
      treeviewMenu: [
         {
            name: 'Mening xabarlarim',
            route: ''
         },
         {
            name: 'Xabar yaratish',
            route: ''
         }
      ]
   },
   {
      treeview: 'Tizim',
      value: 4,
      treeviewMenu: [
         {
            name: 'Profil',
            route: ''
         },
         {
            name: 'Kirish tarixi',
            route: ''
         }
      ]
   }
];
</script>

<template>
   <div class="min-h-screen">
      <AppHeader />
      <ScrollArea class="h-[calc(100vh-var(--header-height))] w-[280px] !fixed left-0 top-[--header-height] bg-muted">
         <Accordion type="single" collapsible>
            <AccordionItem v-for="(item, i) in asideMenu" :key="i" :value="item.value">
               <AccordionTrigger class="px-4 hover:bg-foreground/5">{{ item.treeview }}</AccordionTrigger>
               <AccordionContent class="px-4 py-3 cursor-pointer hover:bg-foreground/5 bg-white" v-for="(c, index) in item.treeviewMenu" :key="index">
                  {{ c.name }}
               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </ScrollArea>
      <main class="ml-[280px] min-h-[calc(100vh-var(--header-height))]">
         <slot />
      </main>
      <AppFooter />
   </div>
</template>
