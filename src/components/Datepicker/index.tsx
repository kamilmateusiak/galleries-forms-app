import * as moment from 'moment';
import * as React from 'react';
import DatePicker from 'react-datepicker';
import { Field } from 'react-form';

import 'react-datepicker/dist/react-datepicker.css';

// interface InterfaceDatePickerFieldProps {
//   date: moment.Moment
// };

class DatePickerField extends React.Component<any, any> {
  public render() {
    return (<Field field={this.props.field}>
      {(fieldApi: any) => {
        const { value, setValue, setTouched } = fieldApi
        const { id } = this.props

        const handleOnChange = (date: moment.Moment) => {
          setValue(date.format('DD.MM.YYYY'));
        }

        const handleOnBlur = (event: React.FocusEvent<any>) => {
          event.persist();
          setTouched()
        }

        const newDateArray = value ? value.split('.') : null;

        return (
          <DatePicker
            required={true}
            id={id}
            selected={value ? moment(new Date(newDateArray[2], newDateArray[1], newDateArray[0])) : undefined}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
          />
        );
      }}
      </Field>
    )
  }
}

export default DatePickerField;
