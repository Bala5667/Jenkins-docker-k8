pipeline {
    agent any

    stages {
        stage('Update Kubernetes Deployment') {
            steps {
                echo "📦 Pulling Docker images and applying Kubernetes manifests..."

                sh '''
                kubectl rollout restart deployment frontend-deployment
                kubectl rollout restart deployment backend-deployment

                kubectl apply -f k8s/configmap.yaml
                kubectl apply -f k8s/mysql-pvc.yaml
                kubectl apply -f k8s/mysql-deployment.yaml
                kubectl apply -f k8s/backend-deployment.yaml
                kubectl apply -f k8s/frontend-deployment.yaml
                kubectl apply -f k8s/ingress.yaml || true
                '''
            }
        }
    }
}
