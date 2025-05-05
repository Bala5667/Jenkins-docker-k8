node {
    stage('Build Frontend Image') {
        dir('frontend') {
            echo "Building frontend image..."
            bat 'docker build -t dockerhub-creds/student-frontend:latest .'
        }
    }

    stage('Build Backend Image') {
        dir('backend') {
            echo "Building backend image..."
            bat 'docker build -t dockerhub-creds/student-backend:latest .'
        }
    }
}
