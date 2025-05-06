pipeline {
    agent any

    environment {
        IMAGE_NAME = 'balaji5667/student-frontend'
        IMAGE_TAG = 'latest'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image from frontend Dockerfile...'
                bat """
                docker build -t %IMAGE_NAME%:%IMAGE_TAG% frontend
                """
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    bat """
                    echo %PASSWORD% | docker login -u %USERNAME% --password-stdin
                    docker push %IMAGE_NAME%:%IMAGE_TAG%
                    """
                }
            }
        }
    }

    post {
        failure {
            echo 'Build failed.'
        }
    }
}
