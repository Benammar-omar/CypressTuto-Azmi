pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Benammar-omar/CypressTuto-Azmi.git'
            }
        }

        stage('Install Cypress') {
            steps {
                bat 'npm install cypress' // Installation de Cypress via npm
                bat 'npx cypress install' // Installation du binaire Cypress
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx cypress run'
            }
        }

        stage('Publish Reports') {
            steps {
                // Vérifier si le répertoire existe avant de le créer
                script {
                    def dirExists = fileExists('cypress-reports')
                    if (!dirExists) {
                        bat 'mkdir cypress-reports'
                    }
                }

                // Copier les rapports Cypress dans un répertoire différent
                bat 'xcopy /E /I /Y C:\\Users\\obenammar\\Desktop\\CypressTuto-Azmi\\mochawesome-report .\\cypress-reports\\mochawesome-report'

                // Publier les rapports en tant que rapport Jenkins
                publishHTML(target: [
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: true,
            reportDir: 'cypress-reports/mochawesome-report', // Chemin vers le rapport
            reportFiles: 'mochawesome.html', 
            reportName: 'Cypress Test Report'
        ])
            }
        }
    }
}