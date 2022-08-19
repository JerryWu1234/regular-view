<script setup>
import { context, fullResult } from '../composables/index'
</script>

<template>
  <div class="flex border-t border-true-gray-400 border-opacity-25 overflow-hidden">
    <div class="flex-1 h-full border-r border-gray-400 border-opacity-25 overflow-hidden">
      <nav class="flex px-4 my-2">
        <div class="flex-auto" />
        <div class="active">
          <button i-carbon-delete class="icon-btn m-2" />
        </div>
        <div class="ml-2">
          <button i-carbon-copy class="icon-btn m-2" />
        </div>
      </nav>
      <div class="flex-auto my-2 mx-4 flex h-full overflow-y-scroll">
        <Editor v-model="context" class="flex-auto h-full " />
      </div>
    </div>
    <div class="flex-1 h-full overflow-hidden">
      <nav class="flex px-4 my-2">
        <div class="flex-auto" />
        <div class="active">
          <button i-carbon-automatic class="icon-btn m-2" />
        </div>
        <div class="ml-2">
          <button i-carbon-number-1 class="icon-btn m-2 " />
        </div>
        <div class="ml-2">
          <button i-carbon-number-2 class="icon-btn m-2" />
        </div>
        <div class="ml-2">
          <button i-carbon-number-3 class="icon-btn m-2" />
        </div>
        <div class="ml-2">
          <button i-carbon-copy class="icon-btn m-2" />
        </div>
      </nav>
      <div class="flex-auto my-2 mx-4 flex h-full overflow-y-scroll">
        <Editor v-model="fullResult" />
      </div>
    </div>
  </div>
</template>
