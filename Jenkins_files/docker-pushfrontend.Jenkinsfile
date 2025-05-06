pipeline {
    agent any

    environment {
        IMAGE_NAME = 'balaji5667/student-frontend'
        IMAGE_TAG = 'latest'
    }

    stages {
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
            echo 'Push failed.'
        }
        success {
            echo 'Image pushed to Docker Hub successfully.'
        }
    }
}
