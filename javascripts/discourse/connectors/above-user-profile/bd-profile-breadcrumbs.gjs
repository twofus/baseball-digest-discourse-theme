<template>
  <nav class="bd-theme-breadcrumbs bd-theme-breadcrumbs--profile" aria-label="Breadcrumb">
    <a class="bd-theme-breadcrumbs__link" href="/">Forum Front Page</a>
    <span class="bd-theme-breadcrumbs__separator" aria-hidden="true">›</span>
    <span class="bd-theme-breadcrumbs__section">Profile</span>
    <span class="bd-theme-breadcrumbs__separator" aria-hidden="true">›</span>
    <span class="bd-theme-breadcrumbs__current" aria-current="page">
      {{if @outletArgs.model.name @outletArgs.model.name @outletArgs.model.username}}
    </span>
  </nav>
</template>
