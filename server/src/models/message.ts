import t from "io-ts";

const RuntimeMessage = t.type({
    name: t.string,
    text: t.string,
});

export const MessageValidator = t.exact(RuntimeMessage);
export type Message = t.TypeOf<typeof MessageValidator>;