import type { V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { sleep } from "~/utils/sleep";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Remix Notes" }];
};

export const loader = async () => {
  sleep(400);
  return { route: "index" };
};

export default function Index() {
  const data = useLoaderData();
  return (
    <main>
      <h1>route: {data.route}</h1>

      <Link to="/e/123/456">link to e/123/456</Link>
    </main>
  );
}
