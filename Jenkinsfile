pipeline {
    agent any
    environment {
        DOCKER_REGISTRY = "iamravi1"
        DOCKER_CREDENTIALS = credentials("dockerhub")
        IMAGE_NAME = "notesapp"
        IMAGE_TAG = "$BUILD_NUMBER"
    }

    stages {
        stage('Clone repository') {
            steps {
                git branch: 'main', url: 'https://github.com/iamravi1/notes_api_docker.git'
            }
        }

        stage('Build Docker image') {
            steps {
                script {
                    docker.build("${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}")
                }
            }
        }
        
        stage("Login"){
            steps{
                sh "echo $DOCKER_CREDENTIALS_PSW | docker login -u $DOCKER_CREDENTIALS_USR --password-stdin"
            }
        }
        
        stage("Push image to DockerHub") {
            steps {
                sh "docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
            }
        }
    }
}
