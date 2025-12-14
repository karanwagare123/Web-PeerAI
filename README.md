# Web Ecommerce product list

This repository contains a demo project for showcasing a Web API implementation, specifically focusing on the `WeatherForecast` API.

## Features

- RESTful API design
- Docker support
- Azure Pipeline integration
- Helm charts for Kubernetes deployment

## Prerequisites

- Node version 24+
- Docker
- Kubernetes CLI (kubectl)
- Helm CLI
- Any IDE or text editor VS Code

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/Web-PeerAI.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Web-PeerAI
    ```
3. Build the project:
    ```bash
    dotnet build
    ```
4. Run the application:
    ```bash
    dotnet run
    ```

## Validation

Use the following endpoint to test the `eCommerce` List: http://4.187.248.178:8080/

## Docker Support

A `Dockerfile` is included in the repository to containerize the application. To build and run the Docker container:

1. Build the Docker image:
    ```bash
    docker build -t devopspoc:latest .
    ```
2. Run the Docker container:
    ```bash
    docker run -p 8080:8080 devopspoc:latest
    ```

## Azure Pipeline

The repository includes an Azure Pipeline configuration file (`azure-pipelines.yml`) for CI/CD. To set up the pipeline:

1. Navigate to your Azure DevOps project.
2. Create a new pipeline and point it to this repository.
3. The pipeline will build, test, and deploy the application.

## Helm Charts

Helm charts are provided in the `helm/` directory for deploying the application to a Kubernetes cluster. To deploy using Helm:

1. Install the Helm chart:
    ```bash
    helm install webapidemo ./helm
    ```
2. Verify the deployment:
    ```bash
    kubectl get all
    ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
