import Component from "@glimmer/component";
import { on } from "@ember/modifier";
import { action } from "@ember/object";
import { service } from "@ember/service";
import { apiInitializer } from "discourse/lib/api";

class BaseballDigestHeaderShortcuts extends Component {
  @service search;
  @service currentUser;

  @action
  toggleSearch(event) {
    event?.preventDefault();

    this.search.visible = !this.search.visible;

    if (!this.search.visible) {
      this.search.highlightTerm = "";
      this.search.inTopicContext = false;
    }
  }

  <template>
    <li class="bd-theme-header-shortcuts">
      <button
        type="button"
        class="bd-theme-header-shortcut bd-theme-header-search search-dropdown"
        aria-label={{if this.search.visible "Close search" "Search"}}
        title={{if this.search.visible "Close search" "Search"}}
        aria-expanded={{this.search.visible}}
        {{on "click" this.toggleSearch}}
      >
        {{#if this.search.visible}}
          <span
            class="bd-theme-header-shortcut__icon bd-theme-header-shortcut__icon--close"
            aria-hidden="true"
          ></span>
        {{else}}
          <span
            class="bd-theme-header-shortcut__icon bd-theme-header-shortcut__icon--search"
            aria-hidden="true"
          ></span>
        {{/if}}
      </button>

      <a
        class="bd-theme-header-shortcut"
        href="https://baseballdigest.com/digital/"
        aria-label="Digital Baseball Digest home"
        title="Digital Baseball Digest home"
      >
        <span
          class="bd-theme-header-shortcut__icon bd-theme-header-shortcut__icon--home"
          aria-hidden="true"
        ></span>
      </a>

      {{#if this.currentUser}}
        <a
          class="bd-theme-header-shortcut"
          href="/my/activity"
          aria-label="Your forum profile"
          title="Your forum profile"
        >
          <span
            class="bd-theme-header-shortcut__icon bd-theme-header-shortcut__icon--profile"
            aria-hidden="true"
          ></span>
        </a>
      {{/if}}
    </li>
  </template>
}

export default apiInitializer((api) => {
  api.headerIcons.add(
    "baseball-digest-shortcuts",
    BaseballDigestHeaderShortcuts,
    { after: "user-menu" }
  );
});
