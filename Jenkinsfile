pipeline {
    agent any
    stages {
        stage('Pull') {
            steps {
                git 'pull origin master'  
            }
        }
        stage('Build') {
            steps {
                sh 'docker-compose build --no-cache'
            }
        }
        stage('Stop and Remove Old Container') {
            steps {
                sh 'docker-compose down'
            }
        }
        stage('Run New Container') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
