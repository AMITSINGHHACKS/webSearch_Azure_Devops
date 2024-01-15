pipeline {
    agent any
    stages {
        stage('checking docker image s') {
            steps {
                sh 'docker images -a'
            }
        }
        stage('checking docker containers') {
            steps {
                sh 'docker ps -a'
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t azure .'
            }
        } 
    }
}
