pipeline { 
    agent any

    environment {
        IMAGE_NAME = 'dockerhub-creds/student-frontend'
        IMAGE_TAG = 'latest'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Prepare Frontend') {
            steps {
                echo 'Installing frontend dependencies using Docker container...'
                bat """
                docker pull node:18
                docker run --rm -v %CD%:/app -w /app node:18 npm install
                """
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Building frontend app...'
                bat """
                docker run --rm -v %CD%:/app -w /app node:18 npm run build
                """
            }
        }

        stage('Build Frontend Image') {
            steps {
                echo 'Building Docker image for frontend...'
                bat "docker build -t %IMAGE_NAME%:%IMAGE_TAG% -f frontend.Dockerfile ."
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
