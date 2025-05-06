pipeline { 
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Prepare Frontend') {
            steps {
                echo 'Installing frontend dependencies using Node.js Docker container...'
                script {
                    docker.image('node:18').inside {
                        dir('frontend') {
                            bat 'npm install'
                            bat 'npm run build'  
                        }
                    }
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('frontend') {
                    echo 'Building frontend Docker image...'
                    bat 'docker build -t dockerhub-creds/student-frontend:latest .'
                }
            }
        }
    }

    post {
        success {
            echo 'Build completed successfully.'
        }
        failure {
            echo 'Build failed.'
        }
    }
}
