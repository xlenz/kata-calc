pipeline {
    agent { label 'master' }
  
    stages {
        stage('Example') {
            steps {
              echo "__Workspace ${env.env.WORKSPACE}"
              println "__Build number ${env.BUILD_NUMBER}"
              sh 'env > env_variables.txt'      
              sleep 3
              step([$class: 'ArtifactArchiver', artifacts: '*.txt'])
            }
        }
    }
  
    post { 
        always { 
          steps {
            echo '== DA POST ACTION =='
          
            step([$class: 'com.serena.da.jenkins.plugins.sdadeploy.SerenaDAPublisher',
                  siteName: 'ua-mg',

                  baseDir: env.WORKSPACE,
                  fileIncludePatterns: '*.txt',
                  fileExcludePatterns: '',
                  component: 'PDT_EAR',
                  versionName: env.BUILD_NUMBER,

                  deploy: true,
                  deployApp: 'PDT_Gestion_Profils',
                  deployEnv: 'TEST',
                  deployProc: 'Deploy_application'
            ])
          }
        }
    }
}
