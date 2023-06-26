import { Link, useFetcher, useLoaderData } from "@remix-run/react";

export const loader = () => {
  return { route: "e.$foo.$bar" };
};

export default function eFooBar() {
  const data = useLoaderData();
  const fetcher = useFetcher();

  return (
    <>
      <div>route: {data.route}</div>

      <fetcher.Form method="post" action="/actionRoute">
        <button>Action</button>
      </fetcher.Form>

      <Link to="/">home</Link>
    </>
  );
}
