pipeline {
    agent any
    environment {
        APP_NAME = "azure-web-search"
        RELEASE = "1.0.0"
        DOCKER_USER = "truthaniket"
        DOCKER_PASS = 'dockerhub'
        IMAGE_NAME = "${DOCKER_USER}" + "/" + "${APP_NAME}"
        IMAGE_TAG = "${RELEASE}-${BUILD_NUMBER}"
       
    }
    stages {
        stage("Build & Push Docker Image") {
            steps {
                script {
                    docker.withRegistry('',DOCKER_PASS) {
                        docker_image = docker.build "${IMAGE_NAME}"
                    }

                    docker.withRegistry('',DOCKER_PASS) {
                        docker_image.push("${IMAGE_TAG}")
                        docker_image.push('latest')
                    }
                }
            }

        }
        stage("Remove Images from locally") {
            steps {
                script {
                    sh 'docker rmi $(docker images -a)'
                }
            }

        } 
    }
   
}
