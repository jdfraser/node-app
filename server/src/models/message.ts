import t from "io-ts";

export const MessageValidator = t.type({
    name: t.string,
    text: t.string,
});

export type Message = t.TypeOf<typeof MessageValidator>;