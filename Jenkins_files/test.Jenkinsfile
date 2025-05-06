pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing frontend dependencies using Docker...'
                bat """
                docker pull node:18
                docker run --rm -v %CD%/frontend:/app -w /app node:18 npm install
                """
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running frontend tests using Docker...'
                bat """
                docker run --rm -v %CD%/frontend:/app -w /app node:18 npm test -- --watchAll=false
                """
            }
        }
    }

    post {
        success {
            echo 'Frontend tests completed successfully.'
        }
        failure {
            echo 'Frontend test stage failed!'
        }
    }
}
