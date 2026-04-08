import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []

    return (
      <footer class={`${displayClass ?? ""}`}>
        {links && Object.keys(links).length > 0 && (
          <ul>
            {Object.entries(links).map(([text, link]) => (
              <li key={text}>
                <a href={link}>{text}</a>
              </li>
            ))}
          </ul>
        )}
        <div class="footer-inner">
          <span>Aspiring Human · {year}</span>
          <img src="/static/footer.png" alt="Footer" />
        </div>
         <p class="footer-contact">
  If something here resonates,{" "}
  <a
  href="mailto:contact@theaspiringhuman.com"
  target="_blank"
  rel="noopener noreferrer"
>
  contact@theaspiringhuman.com
</a>
</p>
      </footer>
    )
  }
  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor