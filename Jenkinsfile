node('master') {
  step([$class: 'ArtifactArchiver', artifacts: '**/*.*'])
  step([$class: 'BuildUser', BUILD_USER: 'haha'])
  echo "${BUILD_USER}"
}
