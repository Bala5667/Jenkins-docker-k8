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
    }

    post {
        failure {
            echo 'Build failed.'
        }
        success {
            echo 'Docker image built successfully.'
        }
    }
}
