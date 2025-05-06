node {
    stage('Test Frontend') {
        dir('frontend') {
            echo "🧪 Running frontend tests..."
            bat 'npm install'
            bat 'npm test || echo "Frontend test failed (continuing pipeline)"'
        }
    }

    stage('Test Backend') {
        dir('backend') {
            echo "🧪 Running backend tests..."
            bat 'npm install'
            bat 'npm test || echo "Backend test failed (continuing pipeline)"'
        }
    }
}
