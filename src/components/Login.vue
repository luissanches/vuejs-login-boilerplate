<template>
    <div>
        <div class="window-height row justify-center items-center">
            <q-card inline class="col-4 min-width-450">
                <q-card-title>
                    Login
                    <span slot="subtitle">Acesso ao sistema abc</span>
                    <q-icon slot="right" name="assignment_ind" />
                </q-card-title>
                <q-card-main>
                    <div class="row">
                        <q-input v-model="login" color="cyan" float-label="Login" class="col-12" />
                        <q-input v-model="password" color="cyan" float-label="Password" type="password" class="col-12" />
                    </div>
                </q-card-main>

                <q-card-actions class="row justify-end">
                    <q-toggle color="cyan" v-model="remember_password" label="Remember Password" />
                    <q-btn color="cyan" big icon="assignment_ind" @click="onLogin()" class="login-button">
                        login
                    </q-btn>
                </q-card-actions>
            </q-card>
        </div>
    </div>
</template>

<script>
import {
    QBtn, QCard, QCardTitle,
    QCardMedia,
    QCardActions,
    QCardSeparator,
    QCardMain,
    QInput,
    QToggle,
    QIcon,
    QField,
    QTooltip,
    QPopover,
    Toast
} from 'quasar'
import { mapMutations } from 'vuex'
import { LOGIN } from '../store/mutations-types'

export default {
    name: 'login',
    components: {
        QBtn,
        QCard,
        QCardTitle,
        QCardMedia,
        QCardActions,
        QCardSeparator,
        QCardMain,
        QInput,
        QToggle,
        QIcon,
        QField,
        QTooltip,
        QPopover,
        Toast
    },
    methods: {
        onLogin() {
            // TODO: Remove and implements server authentication
            let compareUserBase64 = this.$utils.encode.toBase64('admin@123')
            if (this.login.length > 0 && this.password.length > 0) {
                let userBase64 = this.$utils.encode.toBase64(`${this.login}@${this.password}`)
                if (compareUserBase64 === userBase64) {
                    if (this.remember_password) {
                        localStorage.setItem('bearerauth', userBase64)
                    } else {
                        localStorage.removeItem('bearerauth')
                    }

                    let payload = { login: this.login, password: this.password, name: 'admin', role: 'admin' }
                    // call without action because checkIn dont needs asyncronous
                    this.checkIn(payload)
                    this.$router.replace({ name: 'main' })
                } else {
                    Toast.create.negative({ html: 'Usuário ou Senha Inválidos' })
                }
            }
        },
        ...mapMutations({
            checkIn: `login/${LOGIN.CHECK_IN}` // map this.checkIn()` to `this.$store.commit(`login/${LOGIN.CHECK_IN}`, payload)`
        })
    },
    data() {
        return {
            login: '',
            password: '',
            remember_password: true
        }
    }
}
</script>

<style scoped>
.login-button {
    margin-left: 50px;
    margin-right: 10px;
    width: 150px;
}

.min-width-450 {
    min-width: 450px;
}
</style>
