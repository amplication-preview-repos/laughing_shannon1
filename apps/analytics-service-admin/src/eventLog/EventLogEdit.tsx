import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EventLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="eventType" source="eventType" />
      </SimpleForm>
    </Edit>
  );
};
