<template>
  {{#if @outletArgs.minimized}}
    <span
      class="bd-theme-forum-return-icon"
      role="img"
      aria-label="Return to forum home"
      title="Return to forum home"
    ></span>
  {{else}}
    {{yield}}
  {{/if}}
</template>
