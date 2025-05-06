pipeline {
    agent any

    environment {
        KUBECONFIG = "/home/jenkins/.kube/config" // Adjust this path if needed
    }

    stages {
        stage('Deploy Frontend to Kubernetes') {
            steps {
                script {
                    echo "🚀 Deploying frontend Docker image to Kubernetes..."

                    // Create deployment YAML dynamically (optional)
                    sh '''
                    cat <<EOF > frontend-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
        - name: frontend
          image: balaji5667/student-frontend:latest
          ports:
            - containerPort: 3000
EOF
                    '''

                    // Create service YAML
                    sh '''
                    cat <<EOF > frontend-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: frontend-service
spec:
  selector:
    app: frontend
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
  type: NodePort
EOF
                    '''

                    // Apply Kubernetes manifests
                    sh '''
                    kubectl apply -f frontend-deployment.yaml
                    kubectl apply -f frontend-service.yaml
                    '''
                }
            }
        }
    }
}
