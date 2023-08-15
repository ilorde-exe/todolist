import React from "react";
const s = {
  nav: `flex justify-center`,
  title: `font-mono text-2xl `,
};

export default function Navbar() {
  return (
    <>
      <nav>
        <div className={s.nav}>
          <h2 className={s.title}>Made with React + Tailwind + Firebase</h2>
        </div>
      </nav>
    </>
  );
}
