import * as graphql from "@nestjs/graphql";
import { EventLogResolverBase } from "./base/eventLog.resolver.base";
import { EventLog } from "./base/EventLog";
import { EventLogService } from "./eventLog.service";

@graphql.Resolver(() => EventLog)
export class EventLogResolver extends EventLogResolverBase {
  constructor(protected readonly service: EventLogService) {
    super(service);
  }
}
