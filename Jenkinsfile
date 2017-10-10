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
    agent any
    stages {
        stage('Example') {
            steps {
              build_number = currentBuild.number
              echo 'OLOLO ${build_number}'
              sh "echo 'my artifact data' > build_artifact.txt"
            }
        }
    }
    post { 
        always { 
            echo 'BLDNMBBR'
          
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
