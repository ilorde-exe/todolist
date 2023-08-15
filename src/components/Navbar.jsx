import React from "react";
const s = {
  nav: `flex `,
  logo: ``,
  title: ``,
};

export default function Navbar() {
  return (
    <>
      <nav>
        <div className={s.nav}>
          <img
            src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
            alt="Vite logo"
            className={s.logo}
          />
          <h2 className={s.title}>Basic app</h2>
        </div>
      </nav>
    </>
  );
}
