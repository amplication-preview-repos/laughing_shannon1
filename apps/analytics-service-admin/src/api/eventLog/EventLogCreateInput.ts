import { InputJsonValue } from "../../types";

export type EventLogCreateInput = {
  eventPayload?: InputJsonValue;
  eventType?: string | null;
};
