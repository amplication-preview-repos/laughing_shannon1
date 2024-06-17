import { JsonValue } from "type-fest";

export type EventLog = {
  createdAt: Date;
  eventPayload: JsonValue;
  eventType: string | null;
  id: string;
  updatedAt: Date;
};
