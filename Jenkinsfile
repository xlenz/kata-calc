/*  
node('master') {
  echo "LALALALA"
  // sh "echo 'my artifact data' > build_artifact.txt"
  // step([$class: 'ArtifactArchiver', artifacts: '*.txt'])

  step([$class: 'com.serena.da.jenkins.plugins.sdadeploy.SerenaDAPublisher',
        siteName: 'ua-mg',

        component: 'PDT_EAR',
        versionName: '${BUILD_NUIMBER}',

        deploy: true,
        deployApp: 'PDT_Gestion_Profils',
        deployEnv: 'TEST',
        deployProc: 'Deploy_application'
  ])

  post { 
        always { 
              step([$class: 'com.serena.da.jenkins.plugins.sdadeploy.SerenaDAPublisher',
                siteName: 'ua-mg',

                component: 'PDT_EAR',
                versionName: '${BUILD_NUIMBER}',

                deploy: true,
                deployApp: 'PDT_Gestion_Profils',
                deployEnv: 'TEST',
                deployProc: 'Deploy_application'
          ])
        }
    }
}
*/  
pipeline {
  agent { label 'master' }
  
    stages {
        stage('Example') {
            steps {
              echo "OLOLO ${env.BUILD_NUMBER} ${env.BUILD_NUMBER}"
              println "build ${env.BUILD_NUMBER}"
              sh 'env > env.txt'      
              sleep 3
              sh "echo 'my artifact data' > build_artifact.txt"
              step([$class: 'ArtifactArchiver', artifacts: '*.txt'])
            }
        }
    }
  
    post { 
        always { 
            echo 'BLDNMBBR'
          
            step([$class: 'com.serena.da.jenkins.plugins.sdadeploy.SerenaDAPublisher',
                  siteName: 'ua-mg',

                  component: 'PDT_EAR',
                  versionName: '${env.BUILD_NUIMBER}',

                  deploy: true,
                  deployApp: 'PDT_Gestion_Profils',
                  deployEnv: 'TEST',
                  deployProc: 'Deploy_application'
            ])
        }
    }
}
