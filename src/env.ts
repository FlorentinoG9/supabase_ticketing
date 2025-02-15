/* eslint-disable node/prefer-global/process */
import { z } from 'zod'

const env_schema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
})

export const env = env_schema.parse(process.env)
