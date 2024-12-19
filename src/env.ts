import { z } from "zod";

const env_schema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
});

export const env = env_schema.parse(process.env);
