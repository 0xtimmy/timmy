import './styles.css'
import { mountSketch } from './sketch'

const sketchHost = document.querySelector<HTMLElement>('#sketch')
const animation = sketchHost ? mountSketch(sketchHost) : undefined

if (import.meta.hot) {
  import.meta.hot.dispose(() => animation?.remove())
}
