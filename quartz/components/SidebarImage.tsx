import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const SidebarImage: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <div class="sidebar-image">
      <img src="/static/sidebar-image.png" alt="" />
    </div>
  )
}

export default (() => SidebarImage) satisfies QuartzComponentConstructor