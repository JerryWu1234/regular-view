<script setup>
import { regularValue, replaceValue, signal } from '../composables/index'
</script>

<template>
  <div class="flex flex-col">
    <nav-bar />
    <div class="flex mx-2">
      <editor v-model="regularValue" class="input rounded p-2 m-2 flex-auto" />
      <input v-model="signal" type="text" class="input !py-0 !px-4 !m-2 w-20 rounded" placeholder="signal">
    </div>
    <div class="flex mx-2">
      <transition name="slide-fade">
        <editor v-model="replaceValue" class="input rounded p-2 m-2 flex-auto" />
      </transition>
    </div>
  </div>
</template>

<style lang="css">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
