import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <span className="label">404 / Not found</span>
        <h1 className="display-lg">That system doesn&apos;t exist here.</h1>
        <p className="body-lg muted">
          The requested portfolio route could not be found.
        </p>
        <Link className="ui-button ui-button--primary ui-button--md" href="/">
          Return home
        </Link>
      </div>
    </main>
  );
}
