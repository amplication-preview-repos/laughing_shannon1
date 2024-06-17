import { InputJsonValue } from "../../types";

export type EventLogUpdateInput = {
  eventPayload?: InputJsonValue;
  eventType?: string | null;
};
