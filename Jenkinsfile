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
//pipeline {
  node('master') {
//    stages {
//        stage('Example') {
//            steps {
              echo 'OLOLO ${env.BUILD_NUMBER}'
              sh "echo 'my artifact data' > build_artifact.txt"
//            }
//        }
//    }
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
//}
