<script>
import axios from 'axios';

export default{
  name:'AppMain',
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
                console.log(this.projects);

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
  <section class="vue-home pt-5">
    <div class="container">
      <template v-if="projects"> 
        <div class="row row-cols-1 row-cols-sm-3 g-4">
          <div class="col" v-for="project in projects.data">
            <div class="card border-0 shadow-sm rounded-0 rounded-bottom">
              <!-- <img class="card-image rounded-top" :src="getImagePath(post.cover_image)" alt=""> -->
              <div class="card-body">
                <h4>{{ project.title }}</h4>
                <p>
                  {{ project.description}}
                </p>
              </div>
              <div class="card-footer text-muted">
                <div class="type">
                  <strong>Type: </strong>
                  <span v-if="project.type">
                    {{ project.type.name }}
                  </span>
                  <span v-else>no types yet</span>
                </div>
                <div class="tags">
                  <strong>Technologies: </strong>
                  <template v-if="project.technologies.length > 0">
                    <span v-for="technology in project.technologies">
                      #{{ technology.name }}
                    </span>
                  </template>
                  <template v-else>
                    <span>No Technologies yet!.</span>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <div v-else>
        <p> No projects here </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
