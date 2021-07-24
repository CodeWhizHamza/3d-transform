import Input from './Input'

export default function Ranges({
  type,
  transform,
  transform3d,
  setTransform3d,
  ...rest
}) {
  const handleChangeX = e => {
    setTransform3d({ ...transform3d, x: e.target.value })
  }
  const handleChangeY = e => {
    setTransform3d({ ...transform3d, y: e.target.value })
  }
  const handleChangeZ = e => {
    setTransform3d({ ...transform3d, z: e.target.value })
  }

  return (
    <div className="block__inputs">
      <Input
        id={'x-' + type}
        label="X:"
        value={transform3d.x}
        onChange={handleChangeX}
        {...rest}
      />
      <Input
        id={'y-' + type}
        label="Y:"
        value={transform3d.y}
        onChange={handleChangeY}
        {...rest}
      />
      {transform3d.z !== undefined ? (
        <Input
          id={'z-' + type}
          label="Z:"
          value={transform3d.z}
          onChange={handleChangeZ}
          {...rest}
        />
      ) : null}
    </div>
  )
}
