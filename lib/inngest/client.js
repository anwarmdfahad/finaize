import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "finance-platform",
  name: "Finance Platform",
  retryFunction: async (attempt) => ({ delay: `${2 ** attempt}s` }),
});
