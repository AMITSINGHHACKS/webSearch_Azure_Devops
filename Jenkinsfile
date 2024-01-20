pipeline {
    agent any
    tools{
        jdk 'jdk17'
        nodejs 'node16'
    }
    environment {
        APP_NAME = "azure-web-search"
        RELEASE = "1.0.0"
        DOCKER_USER = "truthaniket"
        DOCKER_PASS = 'dockerhub'
        IMAGE_NAME = "${DOCKER_USER}" + "/" + "${APP_NAME}"
        IMAGE_TAG = "${RELEASE}-${BUILD_NUMBER}"
        SCANNER_HOME=tool 'sonar-scanner' 
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
        stage ('Cleanup Artifacts') {
            steps {
                script {
                    sh "docker rmi ${IMAGE_NAME}:${IMAGE_TAG}"
                    sh "docker rmi ${IMAGE_NAME}:latest"
                }
            }
        }
        stage('Trigger ManifestUpdate') {
            steps {  
                echo "triggering update manifest job"
                build job: 'Devops+Kube', parameters: [string(name: 'DOCKERTAG', value: env.BUILD_NUMBER)]
            }
        }
        
    }
   
}
