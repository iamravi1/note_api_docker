pipeline {
    agent any
    environment {
        IMAGE_NAME = 'iamravi1/notes-app-api'
        CONTAINER_NAME = 'api'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/iamravi1/notes_api_docker.git']]])
            }
        }
        stage('Build') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${BUILD_NUMBER}")
                }
            }
        }
        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    script {
                        docker.withRegistry("https://registry.hub.docker.com", "dockerhub") {
                            dockerImagePush("${IMAGE_NAME}:${BUILD_NUMBER}")
                        }
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"
                sh "docker run -d --name ${CONTAINER_NAME} -p 5000:3000 ${IMAGE_NAME}:${BUILD_NUMBER}"
            }
        }
    }
}
