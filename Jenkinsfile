pipeline {
  
  agent { node { label 'master' } }
  
  stages {
    
    stage('BuildUser invoke') {
      steps {
        echo '1'
        
        node {
         step([$class: 'BuildUser']) {
          echo "${BUILD_USER}"
          echo "${BUILD_USER_ID}"
          echo "${BUILD_USER_EMAIL}"
        } }
        
        step([$class: 'BuildUser']) {
          echo "${BUILD_USER}"
          echo "${BUILD_USER_ID}"
          echo "${BUILD_USER_EMAIL}"
        }
      }
    }
    
    stage('debug DA') {
      steps {
        echo 'TODO'
      }      
    }
  }
  
  
  
  
  parameters {
    choice(choices: '''greeting
silence''', description: '', name: 'REQUESTED_ACTION')
  }
}
