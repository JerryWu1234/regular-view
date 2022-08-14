<template>
  <div class="">
    <!-- <nav-bar /> -->
    <div class="flex mx-2">
      <editor v-model="regularValue" class="input rounded p-2 m-2 flex-auto" />
      <input v-model="signal" type="text" class="input !py-0 !px-4 !m-2 w-20 rounded" placeholder="signal">
    </div>
  </div>
</template>
