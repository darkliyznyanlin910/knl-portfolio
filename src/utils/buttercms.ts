import Butter from "buttercms";
import { env } from "../env.mjs";

export const butter = Butter(env.BUTTERCMS_API_TOKEN);
