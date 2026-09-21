import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="shell page-intro" style={{ textAlign: "center", borderBottom: "none" }}>
      <span className="eyebrow">Page not found</span>
      <h1>This shelf is empty.</h1>
      <p style={{ margin: "16px auto 24px" }}>
        The page you're looking for has been moved or doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}
