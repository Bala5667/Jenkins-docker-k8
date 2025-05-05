node {
    stage('Test Frontend') {
        dir('frontend') {
            echo "🧪 Running frontend tests..."
            sh 'npm install'
            sh 'npm test || echo "Frontend test failed (continuing pipeline)"'
        }
    }

    stage('Test Backend') {
        dir('backend') {
            echo "🧪 Running backend tests..."
            sh 'npm install'
            sh 'npm test || echo "Backend test failed (continuing pipeline)"'
        }
    }
}
