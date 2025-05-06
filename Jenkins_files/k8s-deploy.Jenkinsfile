pipeline {
    agent any

    stages {
        stage('Deploy to Kubernetes') {
            steps {
                echo "📦 Applying Kubernetes Manifests..."

                sh '''
                kubectl apply -f k8s/configmap.yaml
                kubectl apply -f k8s/mysql-pvc.yaml
                kubectl apply -f k8s/mysql-deployment.yaml
                kubectl apply -f k8s/backend-deployment.yaml
                kubectl apply -f k8s/frontend-deployment.yaml
                kubectl apply -f k8s/ingress.yaml || true

                echo "🔁 Restarting deployments to pull latest images..."
                kubectl rollout restart deployment backend-deployment
                kubectl rollout restart deployment frontend-deployment
                '''
            }
        }
    }
}
