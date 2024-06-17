import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventLogWhereInput = {
  eventPayload?: JsonFilter;
  eventType?: StringNullableFilter;
  id?: StringFilter;
};
