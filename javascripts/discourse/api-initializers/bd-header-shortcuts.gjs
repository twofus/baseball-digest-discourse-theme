import { apiInitializer } from "discourse/lib/api";

const BaseballDigestHeaderShortcuts = <template>
  <li class="bd-theme-header-shortcuts">
    <a
      class="bd-theme-header-search icon btn-flat"
      href="/search"
      aria-label="Search"
      title="Search"
    >
      <span
        class="d-icon bd-theme-header-search__icon"
        aria-hidden="true"
      ></span>
    </a>

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
  </li>
</template>;

export default apiInitializer((api) => {
  api.headerIcons.add(
    "baseball-digest-shortcuts",
    BaseballDigestHeaderShortcuts,
    { after: "user-menu" }
  );
});
