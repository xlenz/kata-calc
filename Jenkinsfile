node('master') {
  sh "echo 'my artifact data' > build_artifact.txt"
  step([$class: 'ArtifactArchiver', artifacts: '*.txt'])
  
  step([$class: 'com.serena.da.jenkins.plugins.sdadeploy.SerenaDAPublisher',
    siteName: 'ua-mg',
    runProcess: true,
    processName: 'Deploy_application',
    resourceName: 'auto-agent-direct'
  ])
}
