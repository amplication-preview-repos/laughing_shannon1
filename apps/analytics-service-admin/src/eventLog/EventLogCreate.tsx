import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EventLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="eventType" source="eventType" />
      </SimpleForm>
    </Create>
  );
};
