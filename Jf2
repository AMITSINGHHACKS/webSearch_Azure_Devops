pipeline {
    agent any
    environment {
        SCANNER_HOME=tool 'sonar-scanner' 
    }
    stages {
        stage("Sonarqube Analysis") {
            steps {
                script {
                    withSonarQubeEnv('sonar-scanner') {
                        sh ''' $SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=devops \
                    -Dsonar.projectKey=devops '''
                    }
                }
            }

        }
        
    }
   
}
