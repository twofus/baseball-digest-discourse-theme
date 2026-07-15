import { apiInitializer } from "discourse/lib/api";

const HOME_LABEL = "Forum Front Page";
const LEGACY_FORUM_NAME = "Baseball Digest Digital";
const CURRENT_FORUM_NAME = "Baseball Digest Forum";
const GLOBAL_BREADCRUMB_CLASS = "bd-theme-breadcrumbs--global";

const EXCLUDED_PATH_PREFIXES = [
  "/admin",
  "/wizard",
  "/login",
  "/signup",
  "/password-reset",
  "/finish-installation",
];

function decodeSegment(value = "") {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function titleCaseSlug(value = "") {
  return decodeSegment(value)
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function cleanLabel(value = "") {
  return value
    .replaceAll(LEGACY_FORUM_NAME, CURRENT_FORUM_NAME)
    .replace(/\s+/g, " ")
    .trim();
}

function textFrom(selectors) {
  for (const selector of selectors) {
    const element = document.querySelector(selector);
    const text = cleanLabel(element?.textContent || "");
    if (text) {
      return text;
    }
  }
  return "";
}

function hrefFrom(selectors) {
  for (const selector of selectors) {
    const element = document.querySelector(selector);
    const href = element?.getAttribute?.("href");
    if (href) {
      return href;
    }
  }
  return "";
}

function replaceTextInElement(element) {
  if (!element || !element.textContent?.includes(LEGACY_FORUM_NAME)) {
    return;
  }

  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.nodeValue?.includes(LEGACY_FORUM_NAME)) {
      node.nodeValue = node.nodeValue.replaceAll(
        LEGACY_FORUM_NAME,
        CURRENT_FORUM_NAME
      );
    }
  }
}

function normalizeVisibleForumName() {
  if (document.title.includes(LEGACY_FORUM_NAME)) {
    document.title = document.title.replaceAll(
      LEGACY_FORUM_NAME,
      CURRENT_FORUM_NAME
    );
  }

  document
    .querySelectorAll(
      [
        "#topic-title h1",
        "#topic-title .fancy-title",
        ".topic-list a.title",
        ".latest-topic-list-item a.title",
        ".category-topic-link a.title",
        ".bd-theme-breadcrumbs__current",
        ".d-page-header__title",
        ".topic-title",
      ].join(",")
    )
    .forEach(replaceTextInElement);
}

function categoryName() {
  return textFrom([
    ".category-breadcrumb .selected-name .name",
    ".category-breadcrumb .select-kit-header .name",
    ".category-heading .badge-category__name",
    ".category-title-header .category-name",
    "#topic-title .topic-category .badge-category__name",
  ]);
}

function pageHeading() {
  return textFrom([
    "#topic-title h1",
    ".d-page-header__title",
    ".category-heading__content .badge-category__name",
    ".tag-info h1",
    ".search-container h1",
    ".user-main .user-profile-names__primary",
    "#main-outlet h1",
  ]);
}

function topicCategoryCrumb() {
  const label = categoryName();
  if (!label) {
    return null;
  }

  return {
    label,
    href: hrefFrom([
      "#topic-title .topic-category a",
      "#topic-title .badge-category__wrapper",
    ]),
  };
}

function routeCrumbs(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") {
    return [];
  }

  if (EXCLUDED_PATH_PREFIXES.some((prefix) => path.startsWith(prefix))) {
    return [];
  }

  const segments = path.split("/").filter(Boolean);
  const section = segments[0] || "";
  const crumbs = [{ label: HOME_LABEL, href: "/" }];
  const heading = pageHeading();

  switch (section) {
    case "c": {
      const fallbackSlug = segments.find(
        (segment, index) => index > 0 && !/^\d+$/.test(segment)
      );
      crumbs.push({
        label: categoryName() || titleCaseSlug(fallbackSlug) || "Category",
      });
      break;
    }
    case "categories":
      crumbs.push({ label: "Categories" });
      break;
    case "tag":
      crumbs.push({ label: "Tags", href: "/tags" });
      crumbs.push({ label: titleCaseSlug(segments[1]) || heading || "Tag" });
      break;
    case "tags":
      crumbs.push({ label: "Tags" });
      break;
    case "g":
      if (segments[1]) {
        crumbs.push({ label: "Groups", href: "/g" });
        crumbs.push({ label: heading || titleCaseSlug(segments[1]) || "Group" });
      } else {
        crumbs.push({ label: "Groups" });
      }
      break;
    case "groups":
      crumbs.push({ label: "Groups" });
      break;
    case "u":
      if (segments[1]) {
        crumbs.push({ label: "Profile", href: "/my/activity" });
        crumbs.push({ label: heading || titleCaseSlug(segments[1]) || "Member" });
      } else {
        crumbs.push({ label: "Users" });
      }
      break;
    case "my":
      crumbs.push({ label: "Profile", href: "/my/activity" });
      if (segments[1] && segments[1] !== "activity") {
        crumbs.push({ label: heading || titleCaseSlug(segments[segments.length - 1]) });
      }
      break;
    case "t": {
      const category = topicCategoryCrumb();
      if (category) {
        crumbs.push(category);
      }
      crumbs.push({ label: heading || cleanLabel(document.title) || "Topic" });
      break;
    }
    case "search":
      crumbs.push({ label: "Search" });
      break;
    case "badges":
      crumbs.push({ label: "Badges" });
      break;
    case "about":
      crumbs.push({ label: "About" });
      break;
    case "faq":
    case "guidelines":
      crumbs.push({ label: "FAQ / Guidelines" });
      break;
    case "tos":
      crumbs.push({ label: "Terms of Service" });
      break;
    case "privacy":
      crumbs.push({ label: "Privacy Policy" });
      break;
    case "latest":
      crumbs.push({ label: "Latest" });
      break;
    case "new":
      crumbs.push({ label: "New" });
      break;
    case "unread":
      crumbs.push({ label: "Unread" });
      break;
    case "hot":
      crumbs.push({ label: "Hot" });
      break;
    case "top":
      crumbs.push({ label: "Top" });
      break;
    default:
      crumbs.push({
        label:
          heading ||
          titleCaseSlug(segments[segments.length - 1]) ||
          cleanLabel(document.title) ||
          "Forum",
      });
  }

  return crumbs.filter((crumb) => crumb.label);
}

function createBreadcrumbs(crumbs, pathname) {
  const nav = document.createElement("nav");
  nav.className = `bd-theme-breadcrumbs ${GLOBAL_BREADCRUMB_CLASS}`;
  nav.setAttribute("aria-label", "Breadcrumb");
  nav.dataset.path = pathname;
  nav.dataset.signature = JSON.stringify(crumbs);

  crumbs.forEach((crumb, index) => {
    if (index > 0) {
      const separator = document.createElement("span");
      separator.className = "bd-theme-breadcrumbs__separator";
      separator.setAttribute("aria-hidden", "true");
      separator.textContent = "›";
      nav.append(separator);
    }

    const isCurrent = index === crumbs.length - 1;
    const element = document.createElement(
      !isCurrent && crumb.href ? "a" : "span"
    );

    if (element.tagName === "A") {
      element.href = crumb.href;
      element.className = "bd-theme-breadcrumbs__link";
    } else {
      element.className = isCurrent
        ? "bd-theme-breadcrumbs__current"
        : "bd-theme-breadcrumbs__section";
      if (isCurrent) {
        element.setAttribute("aria-current", "page");
      }
    }

    element.textContent = crumb.label;
    nav.append(element);
  });

  return nav;
}

function ensureBreadcrumbs() {
  normalizeVisibleForumName();

  const mainOutlet = document.querySelector("#main-outlet");
  if (!mainOutlet) {
    return;
  }

  const pathname = window.location.pathname;
  const existingSpecific = document.querySelector(
    `.bd-theme-breadcrumbs:not(.${GLOBAL_BREADCRUMB_CLASS})`
  );
  const existingGlobal = document.querySelector(
    `.${GLOBAL_BREADCRUMB_CLASS}`
  );

  if (existingSpecific) {
    existingGlobal?.remove();
    normalizeVisibleForumName();
    return;
  }

  const crumbs = routeCrumbs(pathname);
  if (crumbs.length < 2) {
    existingGlobal?.remove();
    return;
  }

  const signature = JSON.stringify(crumbs);
  if (
    existingGlobal?.dataset.path === pathname &&
    existingGlobal?.dataset.signature === signature
  ) {
    normalizeVisibleForumName();
    return;
  }

  existingGlobal?.remove();
  mainOutlet.prepend(createBreadcrumbs(crumbs, pathname));
  normalizeVisibleForumName();
}

function scheduleNavigationRefresh() {
  [0, 75, 250, 700].forEach((delay) => {
    window.setTimeout(ensureBreadcrumbs, delay);
  });
}

export default apiInitializer((api) => {
  api.onPageChange(scheduleNavigationRefresh);
  scheduleNavigationRefresh();
});
