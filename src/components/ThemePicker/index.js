import style from './index.module.css'
import { ReactComponent as MoonIcon } from './moon-fill.svg'
import { ReactComponent as SunIcon } from './sun.svg'

export default function ThemePicker({ selectTheme, theme }) {
  const isDark = theme === 'dark'
  const Icon = isDark ? MoonIcon : SunIcon
  return (
    <button className={style.ThemePicker} onClick={selectTheme}>
      <Icon
        style={{
          left: isDark ? 0 : 'unset',
          right: isDark ? 'unset' : 0,
          transform: `translateY(-50%) translateX(${isDark ? '-50%' : '50%'})`,
          backgroundColor: isDark ? 'white' : '#ffb42b',
          fill: isDark ? 'gray' : 'black',
        }}
      />
    </button>
  )
}
