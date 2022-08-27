<script setup>
import { context, fullResult, leftNumberline, lineWrapping, onLeftNumberline, onLineWrapping, onRightNumberline, rightNumberline } from '../composables/index'
const { copy } = useClipboard()
</script>

<template>
  <div class="flex border-t border-true-gray-400 border-opacity-25 overflow-hidden">
    <div class="w-[50%] flex flex-col border-r h-full border-gray-400 border-opacity-25 overflow-hidden ">
      <nav class="flex px-4 my-2">
        <div class="flex-auto" />
        <div :class="lineWrapping === true && 'active'" @click="onLineWrapping()">
          <button i-carbon-transpose class="icon-btn m-2" />
        </div>
        <div :class="leftNumberline === true && 'active'" @click="onLeftNumberline()">
          <button i-carbon-list-numbered class="icon-btn m-2" />
        </div>
        <div v-if="context.length > 0" @click="ondeleteContext()">
          <button i-carbon-delete class="icon-btn m-2" />
        </div>
        <div class="ml-2">
          <button i-carbon-copy class="icon-btn m-2" @click="copy(context)" />
        </div>
      </nav>
      <Editor v-model="context" :line-numbers="leftNumberline" :line-wrapping="lineWrapping" class="my-2 mx-4 flex-auto overflow-y-auto " />
    </div>
    <div class="w-[50%] flex flex-col h-full  overflow-hidden ">
      <nav class="flex px-4 my-2">
        <div class="flex-auto" />
        <div v-if="!repleaceState" class="active">
          <button i-carbon-automatic class="icon-btn m-2" />
        </div>
        <div v-if="!repleaceState" class="ml-2">
          <button i-carbon-number-1 class="icon-btn m-2 " />
        </div>
        <div v-if="!repleaceState" class="ml-2">
          <button i-carbon-number-2 class="icon-btn m-2" />
        </div>
        <div v-if="!repleaceState" class="ml-2">
          <button i-carbon-number-3 class="icon-btn m-2" />
        </div>
        <div :class="rightNumberline === true && 'active'" @click="onRightNumberline()">
          <button i-carbon-list-numbered class="icon-btn m-2" />
        </div>
        <div class="ml-2">
          <button i-carbon-copy class="icon-btn m-2" @click="copy(fullResult)" />
        </div>
      </nav>
      <Editor v-model="fullResult" :line-numbers="rightNumberline" class="my-2 mx-4 flex-auto  overflow-y-auto" />
    </div>
  </div>
</template>
