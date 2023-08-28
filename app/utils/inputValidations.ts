export const day_validation:{name:string, label:string, type:string, id:string, placeholder:string, validation: { required: { value: boolean, message: string, }, maxLength: { value: number, message: string, }}} = {
    name: 'day',
    label: 'day',
    type: 'number',
    id: 'day',
    placeholder: 'DD',
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
      maxLength: {
        value: 31,
        message: 'Must be a valid day',
      },
    },
  }

  export const month_validation:{name:string, label:string, type:string, id:string, placeholder:string, validation: { required: { value: boolean, message: string, }, maxLength: { value: number, message: string, }}} = {
    name: 'month',
    label: 'month',
    type: 'number',
    id: 'month',
    placeholder: 'MM',
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
      maxLength: {
        value: 12,
        message: 'Must be a valid month',
      },
    },
  }

  export const year_validation:{name:string, label:string, type:string, id:string, placeholder:string, validation: { required: { value: boolean, message: string, }, maxLength: { value: number, message: string, }}} = {
    name: 'year',
    label: 'year',
    type: 'number',
    id: 'year',
    placeholder: 'YYYY',
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
      maxLength: {
        value: 2023,
        message: 'Must be in the past',
      },
    },
  }