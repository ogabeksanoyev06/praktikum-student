<script setup>
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

definePageMeta({ layout: 'auth' });
</script>

<template>
   <div class="relative max-w-[450px] w-full bg-card mx-auto border-t-4 border-b-4 rounded-sm p-4 border-border">
      <div class="absolute right-0 top-0 p-1">
         <DropdownMenu>
            <DropdownMenuTrigger as-child>
               <Button variant="ghost" size="icon">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     class="lucide lucide-ellipsis-vertical-icon size-4"
                  >
                     <circle cx="12" cy="12" r="1"></circle>
                     <circle cx="12" cy="5" r="1"></circle>
                     <circle cx="12" cy="19" r="1"></circle>
                  </svg>
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
               <DropdownMenuItem>Profile</DropdownMenuItem>
               <DropdownMenuItem>Billing</DropdownMenuItem>
               <DropdownMenuItem>Team</DropdownMenuItem>
               <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
      <div class="flex flex-col items-center text-center gap-y-2 mb-4">
         <img src="https://hemis.tsue.uz/static/crop/2/3/250_250_90_2315835180.png" class="w-20 h-20" />
         <h4>Toshkent davlat iqtisodiyot instituti</h4>
         <h5>Talaba amaliyot o'tash tizimi</h5>
      </div>
      <form class="flex flex-col w-full gap-4">
         <div class="relative items-center">
            <Input type="text" placeholder="Talaba ID" class="pr-8" />
            <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-mail text-muted-foreground w-4 h-4"
               >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
               </svg>
            </span>
         </div>
         <div class="relative items-center">
            <Input type="password" placeholder="Parol" class="pr-8" />
            <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-lock-keyhole text-muted-foreground w-4 h-4"
               >
                  <circle cx="12" cy="16" r="1" />
                  <rect x="3" y="10" width="18" height="12" rx="2" />
                  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
               </svg>
            </span>
         </div>
         <div class="flex items-center justify-between flex-wrap gap-2 mt-2">
            <div class="flex items-center space-x-2">
               <Checkbox id="rememberMe" />
               <label for="rememberMe" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> Eslab qolish </label>
            </div>
            <Button>Tizimga kirish</Button>
         </div>
      </form>
   </div>
</template>
