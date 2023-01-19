<script>
import AppNav from './components/AppNav.vue'
import AppBanner from './components/AppBanner.vue'
import AppMain from './components/AppMain.vue'
import axios from 'axios';

export default {
    components: {
        AppNav,
        AppBanner,
        AppMain
    },
    data(){
        return{
            projects:null,
            base_api_url: 'http://127.0.0.1:8000',
            error:null
        }
    },
    methods:{
        getProjects(url){
            // ajax call to get all projects
            axios.get(url).then(response =>{
                console.log(response.data.results);
                this.projects = response.data.results;
            }).catch(error =>{
                console.log(error.message);
                this.error = error.message;
            })
        }
    },
    mounted(){
        this.getProjects(this.base_api_url + '/api/projects');
    }
}
</script>

<template>

    <AppNav></AppNav>
    <AppBanner></AppBanner>
    <AppMain></AppMain>

</template>

<style lang="scss">
@use './styles/general.scss';
</style>