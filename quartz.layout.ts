import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {}
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    // Component.TagList(), // removed to hide tags
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    // Custom Explorer with hidden-folder filtering
    (() => {
      const filterFn = function hideHidden(node: any) {
        const omit = new Set(["_hidden"])
        if (omit.has(node.displayName.toLowerCase())) return false
        if (node.children) {
          node.children = node.children.filter(hideHidden)
        }
        return true
      }

      // Pass props in a way that TypeScript accepts
      return Component.Explorer({ filterFn })
    })(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
  filterFn: function hideHidden(node) {
    const omit = new Set(["_hidden"]);

    // Check this node
    if (omit.has(node.displayName.toLowerCase())) return false;

    // If it has children, filter them recursively
    if (node.children) {
      node.children = node.children.filter(hideHidden);
    }

    return true;
  },
}),
  ],
  right: [],
}