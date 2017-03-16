pipeline {
  agent any
  stages {
    stage('Build') {
      when {
        expression {
          params.REQUESTED_ACTION == 'greeting'
        }
        
      }
      steps {
        echo 'Hello, bitwiseman!'
      }
    }
    stage('Deploy') {
      steps {
        parallel(
          "Relay": {
            echo 'Download artifacts'
            
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
            
          },
          "Firefox": {
            echo 'Firefox'
            
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