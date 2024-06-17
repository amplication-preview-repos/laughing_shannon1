import { SortOrder } from "../../util/SortOrder";

export type EventLogOrderByInput = {
  createdAt?: SortOrder;
  eventPayload?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
