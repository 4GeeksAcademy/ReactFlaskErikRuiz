FROM mcr.microsoft.com/devcontainers/python:3.10

RUN apt-get update && apt-get install -y curl git

# Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

WORKDIR /workspaces