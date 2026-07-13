<template>
  <nav class="bd-theme-breadcrumbs bd-theme-breadcrumbs--topic" aria-label="Breadcrumb">
    <a class="bd-theme-breadcrumbs__link" href="/">Forum Front Page</a>

    {{#if @outletArgs.model.category}}
      <span class="bd-theme-breadcrumbs__separator" aria-hidden="true">›</span>
      <a
        class="bd-theme-breadcrumbs__link"
        href={{@outletArgs.model.category.url}}
      >{{@outletArgs.model.category.name}}</a>
    {{/if}}

    <span class="bd-theme-breadcrumbs__separator" aria-hidden="true">›</span>
    <span class="bd-theme-breadcrumbs__current" aria-current="page">
      {{@outletArgs.model.title}}
    </span>
  </nav>
</template>
