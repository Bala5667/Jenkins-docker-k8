pipeline {
    agent any

    environment {
        KUBECONFIG = "C:\\Users\\your-windows-username\\.kube\\config" // Replace with your actual path
    }

    stages {
        stage('Deploy Frontend to Kubernetes') {
            steps {
                script {
                    echo "🚀 Deploying frontend Docker image to Kubernetes..."

                    // Create frontend deployment YAML
                    bat '''
                    echo apiVersion: apps/v1 > frontend-deployment.yaml
                    echo kind: Deployment >> frontend-deployment.yaml
                    echo metadata: >> frontend-deployment.yaml
                    echo "  name: frontend-deployment" >> frontend-deployment.yaml
                    echo spec: >> frontend-deployment.yaml
                    echo "  replicas: 1" >> frontend-deployment.yaml
                    echo "  selector:" >> frontend-deployment.yaml
                    echo "    matchLabels:" >> frontend-deployment.yaml
                    echo "      app: frontend" >> frontend-deployment.yaml
                    echo "  template:" >> frontend-deployment.yaml
                    echo "    metadata:" >> frontend-deployment.yaml
                    echo "      labels:" >> frontend-deployment.yaml
                    echo "        app: frontend" >> frontend-deployment.yaml
                    echo "    spec:" >> frontend-deployment.yaml
                    echo "      containers:" >> frontend-deployment.yaml
                    echo "      - name: frontend" >> frontend-deployment.yaml
                    echo "        image: balaji5667/student-frontend:latest" >> frontend-deployment.yaml
                    echo "        ports:" >> frontend-deployment.yaml
                    echo "        - containerPort: 3000" >> frontend-deployment.yaml
                    '''

                    // Create ClusterIP service YAML (required for Ingress)
                    bat '''
                    echo apiVersion: v1 > frontend-service.yaml
                    echo kind: Service >> frontend-service.yaml
                    echo metadata: >> frontend-service.yaml
                    echo "  name: frontend-service" >> frontend-service.yaml
                    echo spec: >> frontend-service.yaml
                    echo "  selector:" >> frontend-service.yaml
                    echo "    app: frontend" >> frontend-service.yaml
                    echo "  ports:" >> frontend-service.yaml
                    echo "  - protocol: TCP" >> frontend-service.yaml
                    echo "    port: 80" >> frontend-service.yaml
                    echo "    targetPort: 3000" >> frontend-service.yaml
                    echo "  type: ClusterIP" >> frontend-service.yaml
                    '''

                    // Apply deployment and service
                    bat '''
                    kubectl apply -f frontend-deployment.yaml
                    kubectl apply -f frontend-service.yaml
                    '''

                    // Apply your existing ingress YAML
                    bat '''
                    kubectl apply -f ingress.yaml
                    '''
                }
            }
        }
    }
}
