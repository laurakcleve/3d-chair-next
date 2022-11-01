import { HexColorPicker } from 'react-colorful'
import styles from '../styles/Home.module.css'

function ColorPicker({ current, chairColors, setChairColors, partNames }) {
  return (
    <div
      className={styles['color-picker']}
      style={{ display: current ? 'block' : 'none' }}
    >
      <div className={styles['picker-label']}>{partNames[current]}</div>
      <HexColorPicker
        className={styles.picker}
        color={chairColors[current]}
        onChange={(color) => {
          const newColors = { ...chairColors }
          newColors[current] = color
          setChairColors(newColors)
        }}
      />
    </div>
  )
}

export default ColorPicker
