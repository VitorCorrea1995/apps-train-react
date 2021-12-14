import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Component style overrides
import Stat from './components/stat'

const overrides = {
    styles,
    components: {
        Stat
    }
}

export default extendTheme(overrides)