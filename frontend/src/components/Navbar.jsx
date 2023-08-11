export default function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-left">
          <img
            src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
            alt="Vite logo"
            className="nav-logo"
          />
          <h2 className="nav-title">Basic app</h2>
        </div>
        <div className="nav-elements">
          <h3 className="nav-text">
            <a href="#">Home</a>
          </h3>
          <h3 className="nav-text">
            <a href="#">About</a>
          </h3>
          <h3 className="nav-text">
            <a href="#">Products</a>
          </h3>
          <h3 className="nav-text">
            <a href="#">Contact</a>
          </h3>
        </div>
      </nav>
    </>
  );
}
