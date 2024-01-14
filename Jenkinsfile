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
        stage('Run Container') {
            steps {
                sh 'docker run -it -d --name azureweb -p 8083:6000 azure'
            }
        } 
    }
    pre {
        // Pre-processing steps go here
        script {
            // Stop all running containers
            sh 'docker stop $(docker ps -q) || true'
            // Remove all containers
            sh 'docker rm -f $(docker ps -a -q) || true'

           // Remove all images
            sh 'docker rmi -f $(docker images -q) || true'
        }
    }
    post {
    always {
        echo 'Slack Notifications'
        slackSend (
            channel: 'pipeline-notifications',
            message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} \n build ${env.BUILD_NUMBER} \n More info at: ${env.BUILD_URL}"
        )
        mail bcc: '', body: "Hey the project pipeline is running \n *${currentBuild.currentResult}:* Job ${env.JOB_NAME} \n build ${env.BUILD_NUMBER} ", cc: 'aniketsingh78698@gmail.com', from: '', replyTo: '', subject: 'Jenkins devops', to: 'as216889@gmail.com'
    }
}
}