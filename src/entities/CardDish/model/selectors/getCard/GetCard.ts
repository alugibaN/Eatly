import type { StateSchema } from "app/providers/storeProvider/index";

export const getCard = ((state: StateSchema) => state.dish)