pipeline {
  agent none
  stages {
    stage('Build') {
      steps {
        echo 'Hello, bitwiseman!'
      }
    }
    stage('Deploy') {
      steps {
        parallel(
          "Relay": {
            echo 'Download artifacts'
            sleep 15
           
          },
          "Server": {
            echo 'Server'
            
          },
          "Agent": {
            echo 'Agent'
            
          }
        )
      }
    }
    stage('Rest Test') {
      steps {
        echo 'run rest'
        echo 'copy results'
        sh 'exit 2'
      }
    }
    stage('UI Tests') {
      steps {
        parallel(
          "Edge": {
            echo 'Edge'
            
          },
          "Chrome": {
            echo 'chrome'
            sleep 10
            
          },
          "Firefox": {
            echo 'Firefox'
            sh '''sleep 30
exit 2'''
            
          }
        )
      }
    }
    stage('Staging') {
      steps {
        echo 'stage'
      }
    }
    stage('Production') {
      steps {
        echo 'Prod'
      }
    }
  }
  parameters {
    choice(choices: '''greeting
silence''', description: '', name: 'REQUESTED_ACTION')
  }
}
