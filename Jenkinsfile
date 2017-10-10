node('master') {
  sh echo "my artifact data">"build_artifact.txt"
  step([$class: 'ArtifactArchiver', artifacts: '*.txt'])
}
