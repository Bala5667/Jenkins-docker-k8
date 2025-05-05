pipeline {
    agent any

    stages {
        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                echo "📤 Pushing images to Docker Hub..."
                sh 'docker push $DOCKER_USER/student-frontend:latest'
                sh 'docker push $DOCKER_USER/student-backend:latest'
            }
        }
    }
}
