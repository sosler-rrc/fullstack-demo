import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="page-links">
        <span>
          {/* This is a code comment */}
          <a href="#">Home</a>
        </span>
        <span>
          <a href="#">Top Terms</a>
        </span>
        <span>
          <a href="#">My Terms</a>
        </span>
        <span>
          <a href="#">My Contexts</a>
        </span>
      </div>
      <div className="user-management-links">
        <span>
          <a href="#">Log In</a>
        </span>
      </div>
    </nav>
  );
}
