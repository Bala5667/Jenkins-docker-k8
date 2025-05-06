pipeline {
    agent any

    stages {
        stage('Deploy Frontend to Kubernetes') {
            steps {
                script {
                    echo "🚀 Deploying frontend Docker image to Kubernetes..."

                    // Write Deployment YAML
                    writeFile file: 'frontend-deployment.yaml', text: '''
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
'''

                    // Write Service YAML
                    writeFile file: 'frontend-service.yaml', text: '''
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
  type: ClusterIP
'''

                    // Apply to Kubernetes
                    sh 'kubectl apply -f frontend-deployment.yaml'
                    sh 'kubectl apply -f frontend-service.yaml'
                }
            }
        }
    }
}
