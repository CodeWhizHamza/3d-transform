import Input from './Input'

export default function Ranges({ type, ...rest }) {
  return (
    <div className="block__inputs">
      <Input id={'x-' + type} label="X:" {...rest} />
      <Input id={'y-' + type} label="Y:" {...rest} />
      <Input id={'z-' + type} label="Z:" {...rest} />
    </div>
  )
}
