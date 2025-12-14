eCommerce Product List
The Repository Containes code for eCommerce Product listing

Features
RESTful API design
Docker support
Azure Pipeline integration
Helm charts for Kubernetes deployment
Prerequisites
Node version 24+
Docker
Kubernetes CLI (kubectl)
Helm CLI
Any IDE or text editor (,VS Code)
Getting Started
Clone the repository:
git clone 
Navigate to the project directory:
cd 
Build the project:
RUN npm install --only=production
Run the application:
npm start
Testing the WeatherForecast API
Use the following endpoint to test the WeatherForecast API:
http://4.187.248.178:8080/

Docker Support
A Dockerfile is included in the repository to containerize the application. To build and run the Docker container:

Build the Docker image:
docker build -t devopspoc:latest .
Run the Docker container:
docker run -p 8080:8080 devopspoc:latest
Azure Pipeline
The repository includes an Azure Pipeline configuration file (azure-pipelines.yml) for CI/CD. To set up the pipeline:

Navigate to your Azure DevOps project.
Create a new pipeline and point it to this repository.
The pipeline will build, test, and deploy the application.
Helm Charts
Helm charts are provided in the helm/ directory for deploying the application to a Kubernetes cluster. To deploy using Helm:

Install the Helm chart:
helm install ./helm
Verify the deployment:
kubectl get all
Contributing
Contributions are welcome! Please fork the repository and submit a pull request.