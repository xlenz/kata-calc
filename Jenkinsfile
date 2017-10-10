pipeline {
    agent { label 'master' }
  
    stages {
        stage('Example') {
            steps {
                timestamps {
                    echo "__Workspace ${env.WORKSPACE}"
                    println "__Build number ${env.BUILD_NUMBER}"
                }
                sh 'env > env_variables.txt'      
                sleep 3
            }
        }
    }
  
    post { 
        always { 
            echo '== DA POST ACTION =='
            
            step([$class: 'ArtifactArchiver', artifacts: '*.txt'])

            wrap([$class: 'com.serena.da.jenkins.plugins.sdadeploy.SerenaDAPublisher',
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
