import { Control, Controller } from 'react-hook-form'
import { Input } from 'antd'
import FormItem, { FormItemProps } from 'antd/lib/form/FormItem'
import { ColProps } from 'antd/lib/col'
import { InputProps, TextAreaProps } from 'antd/lib/input'

type InputFormItem = InputProps &
    FormItemProps & {
        control: Control
        layout: ColProps
    }

type TextAreaFormItem = TextAreaProps &
    FormItemProps & {
        control: Control
        layout: ColProps
    } & {
        rows: number // forcing rows to be defined
    }

export function ControlledFormItem({
    label,
    name,
    defaultValue,
    control,
    layout = {
        span: 6
    },
    ...props
}: InputFormItem | TextAreaFormItem) {
    return (
        <FormItem labelCol={layout} label={label}>
            <Controller
                name={name}
                defaultValue={defaultValue}
                control={control}
                render={({ value, onChange }) => {
                    if ('rows' in props) {
                        return <Input.TextArea {...props} value={value} onChange={e => onChange(e.target.value)} />
                    } else {
                        return <Input {...props} value={value} onChange={e => onChange(e.target.value)} />
                    }
                }}
            />
        </FormItem>
    )
}
