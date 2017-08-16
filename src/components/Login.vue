<template>
    <div>
        <h1>login</h1>
        <q-btn color="primary" icon="assignment_ind" @click="onLogin()">
            login
        </q-btn>
    </div>
</template>

<script>
import { QBtn } from 'quasar'

export default {
    name: 'login',
    components: {
        QBtn
    },
    methods: {
        onLogin () {
            this.$router.replace({ name: 'main' })
        }
    }
}
</script>
