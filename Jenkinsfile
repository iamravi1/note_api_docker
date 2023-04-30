pipeline {
    agent any
    environment {
        IMAGE_NAME = 'iamravi1/notes-app-api'
        CONTAINER_NAME = 'api'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], 
                         doGenerateSubmoduleConfigurations: false, extensions: [], 
                         submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/iamravi1/notes_api_docker.git']]])
            }
        }
        stage('Build') {
            steps {
                script {
                    docker.build("${env.IMAGE_NAME}:${BUILD_NUMBER}")
                }
            }
        }
        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', 
                                                 usernameVariable: 'DOCKER_USERNAME', 
                                                 passwordVariable: 'DOCKER_PASSWORD')]) {
                    script {
                        docker.withRegistry("https://registry.hub.docker.com", "dockerhub") {
                            dockerImagePush("${env.IMAGE_NAME}:${BUILD_NUMBER}")
                        }
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                sh "docker stop ${env.CONTAINER_NAME} || true"
                sh "docker rm ${env.CONTAINER_NAME} || true"
                sh "docker run -d --name ${env.CONTAINER_NAME} -p 5000:3000 ${env.IMAGE_NAME}:${BUILD_NUMBER}"
            }
        }
    }
}
