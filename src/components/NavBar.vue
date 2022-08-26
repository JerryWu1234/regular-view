<template>
  <div class="grid grid-cols-[auto_auto_auto_1fr_auto_auto] px-4 py-1 gap-2 my-3">
    <h1 class="inline-block">
      <b>REGULAR</b>
    </h1>

    <button i-carbon-undo class="icon-btn" />
    <button i-carbon-redo class="icon-btn" />

    <button v-if="regularValue.length || replaceValue.length" i-carbon-delete class="icon-btn" @click="ondeleteRegularValue()" />
    <div />
    <button dark:i-carbon-moon i-carbon-sun class="icon-btn" @click="toggleDark()" />
  </div>
</template>
