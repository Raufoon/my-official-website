interface IconProps {
  width?: string
  height?: string
  fill?: string
  stroke?: string
}

interface Props {
  btnClassName?: string
  iconClassName?: string
  Icon: Function
  iconProps?: IconProps
  onClick: any
  label?: string
  btnStyle?: any
}

export default function IconButton(props: Props) {
  const {
    btnClassName,
    btnStyle,
    iconClassName,
    iconProps,
    Icon,
    onClick,
    label,
  } = props

  return (
    <button className={btnClassName} style={btnStyle} onClick={onClick}>
      <Icon className={iconClassName} {...iconProps} />
      {!!label && <>&nbsp;&nbsp;</>}
      {label}
    </button>
  )
}
