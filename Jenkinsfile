pipeline {
  agent { node { label 'master' } }
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
            sleep 3
            
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
            sleep 2
            
          },
          "Firefox": {
            echo 'Firefox'
            sh '''sleep 5
exit 0'''
            
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
