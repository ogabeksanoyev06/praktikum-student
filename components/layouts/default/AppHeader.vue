<script setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
</script>

<template>
   <header class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b -mb-px border-border">
      <div class="flex h-[--header-height] items-center">
         <div class="hidden md:flex bg-blue-800 h-full w-[280px] justify-center">
            <NuxtLink to="/" class="flex items-center px-4">
               <span class="font-semibold text-accent text-lg"> Amaliyot tizimi</span>
            </NuxtLink>
         </div>
         <div class="container flex items-center flex-1">
            <Button class="" variant="ghost" size="icon">
               <svg strokewidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
                  <path d="M3 5H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M3 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M3 19H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
               </svg>
            </Button>
            <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end h-full">
               <Button variant="ghost" size="icon" class="relative">
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
                     class="lucide lucide-bell w-5 h-5 text-foreground"
                  >
                     <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                     <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                  <span class="absolute top-0 right-0 text-[10px] leading-[0.9] text-accent text-center p-0.5 rounded whitespace-nowrap bg-orange-400">12</span>
               </Button>
               <Button variant="ghost" size="icon">
                  <svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="w-5 h-5 text-foreground">
                     <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417a6.8 6.8 0 0 0 .21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115c.12.076.244.149.37.217l.264.135l.26.12l.303.122l.244.086a6.568 6.568 0 0 0 1.103.26l.317.04l.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.61 7.61 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9"
                        clip-rule="evenodd"
                     ></path>
                  </svg>
               </Button>
               <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                     <Avatar>
                        <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                        <AvatarFallback>CN</AvatarFallback>
                     </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" class="mt-3 w-64">
                     <div class="px-2 py-1.5 text-sm font-semibold">
                        <div class="relative mb-2 flex flex-col items-center justify-center gap-y-3 rounded-md bg-muted pb-5 pt-7">
                           <div class="h-12 w-12 overflow-hidden">
                              <img alt="Og'abek Sanoyev" class="h-full w-full rounded-full object-cover" src="https://github.com/radix-vue.png" />
                           </div>
                           <div class="flex flex-col items-center justify-center">
                              <span class="text-sm font-medium">Og'abek Sanoyev</span><span class="text-xs text-muted-foreground">ogabeksanoyev06@gmail.com</span>
                           </div>
                           <div class="flex items-center gap-x-1.5 rounded-md bg-white px-2 py-0.5">
                              <span>0</span>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                 aria-hidden="true"
                                 role="img"
                                 font-size="14"
                                 class="iconify iconify--noto"
                                 width="1em"
                                 height="1em"
                                 viewBox="0 0 128 128"
                              >
                                 <path
                                    fill="#F77E00"
                                    d="M110.8 23.1L81.7 63.5c-.4.7-.4 1.5 0 2.2l29.1 42.3c1.2 1.8-1 3.9-2.8 2.8L65.1 82.2c-.7-.4-1.5-.4-2.2 0L20 110.8c-1.8 1.2-3.9-1-2.8-2.8l29.1-42.3c.4-.7.4-1.5 0-2.2L17.2 23.1c-1.2-1.8 1-3.9 2.8-2.8l42.9 26.6c.7.4 1.5.4 2.2 0L108 20.3c1.8-1.1 3.9 1 2.8 2.8"
                                 ></path>
                                 <path
                                    fill="#FF9800"
                                    d="m66 5.6l8.4 46.5c.2.8.8 1.4 1.5 1.5l46.5 8.4c2.1.5 2.1 3.5 0 3.9l-46.6 8.4c-.8.2-1.4.8-1.5 1.5L66 122.4c-.4 2.1-3.5 2.1-3.9 0l-8.4-46.6c-.2-.8-.8-1.4-1.5-1.5L5.6 66c-2.1-.4-2.1-3.5 0-3.9l46.5-8.4c.8-.2 1.4-.8 1.5-1.5L62 5.6c.5-2.1 3.5-2.1 4 0"
                                 ></path>
                                 <path
                                    fill="#FFBD52"
                                    d="M52.65 57.02c-2.26 1.44-6.3 1.44-6.3 3.18c0 1.28 2.31 1.28 4.77 1.28c3.49-.05 6.41-.36 7.84-1.54c1.44-1.18 1.9-3.13 2.05-7.07c.15-4.72-.21-5.54-1.38-5.54c-1.55 0-2.52 6.92-6.98 9.69"
                                    opacity=".75"
                                 ></path>
                              </svg>
                           </div>
                        </div>
                     </div>
                     <DropdownMenuItem class="flex cursor-pointer items-center gap-x-2">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           xmlns:xlink="http://www.w3.org/1999/xlink"
                           aria-hidden="true"
                           role="img"
                           font-size="16"
                           class="iconify iconify--ph"
                           width="1em"
                           height="1em"
                           viewBox="0 0 256 256"
                        >
                           <g fill="currentColor">
                              <path d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64" opacity=".2"></path>
                              <path
                                 d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"
                              ></path>
                           </g>
                        </svg>
                        Profil
                     </DropdownMenuItem>
                     <DropdownMenuItem class="flex cursor-pointer items-center gap-x-2">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           xmlns:xlink="http://www.w3.org/1999/xlink"
                           aria-hidden="true"
                           role="img"
                           font-size="16"
                           class="iconify iconify--ph"
                           width="1em"
                           height="1em"
                           viewBox="0 0 256 256"
                        >
                           <g fill="currentColor">
                              <path
                                 d="M232 80v88.89a7.11 7.11 0 0 1-7.11 7.11H200v-64a8 8 0 0 0-8-8h-72L90.13 81.6a8 8 0 0 0-4.8-1.6H64V56a8 8 0 0 1 8-8h45.33a8 8 0 0 1 4.8 1.6L152 72h72a8 8 0 0 1 8 8"
                                 opacity=".2"
                              ></path>
                              <path
                                 d="M224 64h-69.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h152.89A15.13 15.13 0 0 0 208 200.89V184h16.89A15.13 15.13 0 0 0 240 168.89V80a16 16 0 0 0-16-16m-32 136H40V88h45.33l29.87 22.4a8 8 0 0 0 4.8 1.6h72Zm32-32h-16v-56a16 16 0 0 0-16-16h-69.33L94.93 75.2a16.12 16.12 0 0 0-9.6-3.2H72V56h45.33l29.87 22.4A8 8 0 0 0 152 80h72Z"
                              ></path>
                           </g>
                        </svg>
                        Shaxsiy ma'lumotlarim
                     </DropdownMenuItem>
                     <div class="-mx-1 my-1 h-px bg-muted"></div>
                     <DropdownMenuItem class="flex cursor-pointer items-center gap-x-2">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           xmlns:xlink="http://www.w3.org/1999/xlink"
                           aria-hidden="true"
                           role="img"
                           font-size="16"
                           class="text-destructive iconify iconify--lets-icons"
                           width="1em"
                           height="1em"
                           viewBox="0 0 24 24"
                        >
                           <defs>
                              <mask id="iconifyReact44">
                                 <g fill="none">
                                    <circle cx="6" cy="6" r="6" fill="#fff" fill-opacity=".25" transform="matrix(0 -1 -1 0 20 18)"></circle>
                                    <path stroke="silver" stroke-opacity=".25" stroke-width=".6" d="M7.7 12a6.3 6.3 0 1 1 12.6 0a6.3 6.3 0 0 1-12.6 0Z"></path>
                                    <path stroke="#fff" stroke-width="1.2" d="M8 18.928A8 8 0 1 0 8 5.072"></path>
                                    <path
                                       fill="#fff"
                                       d="m2 12l-.469-.375l-.3.375l.3.375zm9 .6a.6.6 0 1 0 0-1.2zM5.531 6.625l-4 5l.938.75l4-5zm-4 5.75l4 5l.938-.75l-4-5zM2 12.6h9v-1.2H2z"
                                    ></path>
                                 </g>
                              </mask>
                           </defs>
                           <path fill="currentColor" d="M0 0h24v24H0z" mask="url(#iconifyReact44)"></path>
                        </svg>
                        <span class="text-destructive">Chiqish</span>
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
         </div>
      </div>
   </header>
</template>
