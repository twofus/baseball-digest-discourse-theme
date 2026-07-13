import { apiInitializer } from "discourse/lib/api";
import DButton from "discourse/ui-kit/d-button";

const BaseballDigestHeaderShortcuts = <template>
  <li class="bd-theme-header-shortcuts">
    <DButton
      @href="/search"
      @icon="magnifying-glass"
      @title="search.title"
      class="bd-theme-header-search icon btn-flat"
    />

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
  // Replace the large Discourse welcome/search banner with the compact
  // personalized greeting in the native header row.
  api.registerValueTransformer("welcome-banner-display-for-route", () => false);

  api.headerIcons.add(
    "baseball-digest-shortcuts",
    BaseballDigestHeaderShortcuts,
    { after: "user-menu" }
  );
});
