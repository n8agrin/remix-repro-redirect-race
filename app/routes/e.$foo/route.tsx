import { Outlet, useLoaderData } from "@remix-run/react";

export const loader = () => {
  return { route: "e.$foo" };
};

export default function eFoo() {
  const { route } = useLoaderData();

  return (
    <div>
      route: {route}
      <Outlet />
    </div>
  );
}
