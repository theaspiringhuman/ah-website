import { QuartzComponent } from "./cfg";

const LogoTitle: QuartzComponent = () => {
  return {
    element: (
      <a href="/" class="site-title">
        <img
          src="/aspiring-human-logo.png"
          alt="Aspiring Human"
          style={{ height: "40px" }}
        />
      </a>
    ),
  };
};

export default LogoTitle;
