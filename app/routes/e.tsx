import { Outlet, useLoaderData } from "@remix-run/react";
import { sleep } from "~/utils/sleep";

export const shouldRevalidate = () => {
  return false;
};

export const loader = async () => {
  await sleep(1000);
  return { route: "e" };
};

export default function E() {
  const { route } = useLoaderData();

  return (
    <main>
      <h1>route: {route}</h1>
      <Outlet />
    </main>
  );
}
