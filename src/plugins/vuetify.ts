import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'

// TODO this is working but feels it's incorrect to have components here
export default createVuetify({
    components: {
        ...components,
        ...labsComponents,
    },
})