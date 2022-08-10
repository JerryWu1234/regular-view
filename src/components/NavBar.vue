<template>
  <div class="grid grid-cols-[auto_auto_auto_1fr_auto_auto] px-4 py-1 pt2 gap-2">
    <h1 class="inline-block">
      <b>Re</b>x
    </h1>

    <button i-carbon-undo class="icon-btn" />
    <button i-carbon-redo class="icon-btn" />

    <button i-carbon-delete class="icon-btn" />
    <div />
    <button class="icon-btn" @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun></div>
    </button>

  </div>
</template>
