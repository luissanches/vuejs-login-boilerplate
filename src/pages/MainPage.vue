<template>
    <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
        <q-toolbar slot="header" class="glossy">
            <q-btn flat @click="$refs.layout.toggleLeft()">
                <q-icon name="menu" />
            </q-btn>
            <q-toolbar-title>
                Application Title
                <div slot="subtitle">Running on Quasar v{{$q.version}}</div>
            </q-toolbar-title>
            <q-btn flat>
                Olá, {{currentLogin.login}}
                <q-popover ref="popover2">
                    <q-list link style="min-width: 100px">
                        <q-item @click="$refs.popover2.close()">
                            <q-item-main label="Profile" />
                        </q-item>
                        <q-item @click="$refs.popover2.close()">
                            <q-item-main label="My Accoun" />
                        </q-item>
                        <q-item @click="onLogout(), $refs.popover2.close()">
                            <q-item-main label="Logout" />
                        </q-item>
                    </q-list>
                </q-popover>
            </q-btn>
        </q-toolbar>
    
        <div slot="left">
            <!--
                                Use <q-side-link> component 
                                instead of <q-item> for 
                                internal vue-router navigation
                              -->
    
            <q-list no-border link inset-delimiter>
                <q-list-header>Essential Links</q-list-header>
                <q-item @click="onNavigate('main')">
                    <q-item-side icon="school" />
                    <q-item-main label="Main" sublabel="main component" />
                </q-item>
                <q-item @click="onNavigate('main2')">
                    <q-item-side icon="record_voice_over" />
                    <q-item-main label="Main2" sublabel="main component 2" />
                </q-item>
            </q-list>
        </div>
    
        <router-view />
    </q-layout>
</template>

<script>
import {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QPopover
} from 'quasar'
import { mapGetters } from 'vuex'

export default {
    name: 'index',
    components: {
        QLayout,
        QToolbar,
        QToolbarTitle,
        QBtn,
        QIcon,
        QList,
        QListHeader,
        QItem,
        QItemSide,
        QItemMain,
        QPopover
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters({currentLogin: 'login/getCurrentLogin'})
    },
    methods: {
        onLogout() {
            this.$router.push({ name: 'login' })
        },
        onNavigate(routeName) {
            this.$router.push({ name: routeName })
        }
    },
    beforeMount() {
        // TODO: implements server authentication
        let currentBearerUser = localStorage.getItem('bearerauth')
        if (currentBearerUser) {
            this.$router.replace({ name: 'main' })
        } else {
            this.$router.replace({ name: 'login' })
        }
    },
    beforeDestroy() {
    }
}
</script>

<style lang="stylus">
.logo-container
  width 255px
  height 242px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
</style>
