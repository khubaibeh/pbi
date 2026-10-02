import { Schema } from "effect";

export type ExactlyOne<Fields> = {
  [K in keyof Fields]: {
    readonly [P in K]: Fields[P];
  } & {
    readonly [P in Exclude<keyof Fields, K>]?: never;
  };
}[keyof Fields];

export function closed<const Fields extends Schema.Struct.Fields>(fields: Fields) {
  const allowed = new Set(Object.keys(fields));
  return Schema.StructWithRest(Schema.Struct(fields), [
    Schema.Record(Schema.String, Schema.Json),
  ]).check(
    Schema.makeFilter(
      (value) =>
        Object.keys(value).every((key) => allowed.has(key)) || "Unexpected object property",
    ),
  );
}

export function numericDictionary<Value extends Schema.Constraint>(value: Value) {
  return Schema.Record(Schema.String, value).check(
    Schema.makeFilter(
      (record) =>
        Object.keys(record).every((key) => /^[0-9]+$/.test(key)) ||
        "Expected a numeric dictionary key",
    ),
  );
}
