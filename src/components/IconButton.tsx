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
}

export default function IconButton(props: Props) {
  const { btnClassName, iconClassName, iconProps, Icon, onClick, label } = props

  return (
    <button className={btnClassName} onClick={onClick}>
      <Icon className={iconClassName} {...iconProps} />
      &nbsp;&nbsp;{label}
    </button>
  )
}
