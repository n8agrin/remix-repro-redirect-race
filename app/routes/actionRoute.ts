import { redirect } from "@remix-run/server-runtime";
import { sleep } from "~/utils/sleep";

// Fun to generate a 3 digit random number
const random = () => Math.floor(Math.random() * 900) + 100;

export const action = async (req: Request, res: Response) => {
  // await sleep(500);
  return redirect(`/e/${random()}/${random()}`);
};
