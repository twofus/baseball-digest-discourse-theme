const BD_HOME_HREF = "https://baseballdigest.com/digital/";
const BD_PROFILE_HREF = "/my/activity";

function addBaseballDigestHeaderShortcuts() {
  const headerIcons = document.querySelector(".d-header-icons");
  if (!headerIcons || headerIcons.querySelector(".bd-theme-header-shortcuts")) {
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "bd-theme-header-shortcuts";

  const home = document.createElement("a");
  home.className = "bd-theme-header-shortcut";
  home.href = BD_HOME_HREF;
  home.setAttribute("aria-label", "Digital Baseball Digest home");
  home.setAttribute("title", "Digital Baseball Digest home");
  home.innerHTML = '<span class="bd-theme-header-shortcut__icon bd-theme-header-shortcut__icon--home" aria-hidden="true"></span>';

  const profile = document.createElement("a");
  profile.className = "bd-theme-header-shortcut";
  profile.href = BD_PROFILE_HREF;
  profile.setAttribute("aria-label", "Your forum profile");
  profile.setAttribute("title", "Your forum profile");
  profile.innerHTML = '<span class="bd-theme-header-shortcut__icon bd-theme-header-shortcut__icon--profile" aria-hidden="true"></span>';

  wrapper.append(home, profile);
  headerIcons.appendChild(wrapper);
}

function removeDuplicateHeaderShortcuts() {
  const wrappers = document.querySelectorAll(".bd-theme-header-shortcuts");
  wrappers.forEach((wrapper, index) => {
    if (index > 0) {
      wrapper.remove();
    }
  });
}

function initializeBaseballDigestHeaderShortcuts() {
  addBaseballDigestHeaderShortcuts();
  removeDuplicateHeaderShortcuts();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeBaseballDigestHeaderShortcuts, { once: true });
} else {
  initializeBaseballDigestHeaderShortcuts();
}

const bdHeaderObserver = new MutationObserver(() => {
  initializeBaseballDigestHeaderShortcuts();
});

bdHeaderObserver.observe(document.documentElement, {
  childList: true,
  subtree: true,
});
