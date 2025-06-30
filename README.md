# Cloudflare Containers Starter

This repository provides a starter template for deploying applications using Cloudflare Workers and Containers. It includes a Worker and a minimal Node or Python application that can be deployed in Cloudflare Container instances. 

## Choosing the Template Application

Simply change the wrangler configuration's image field in containers for the desired Dockerfile

`./js.Dockerfile` for the Nest app

`./py.Dockerfile` for the FastAPI app

## Deploying the Worker

I've used pnpm as a package manager for the root-level Worker application. 

Simply run the following commands to deploy the Worker:

```bash
pnpm install

pnpm wrangler deploy
```

Note that you need to have the Wrangler CLI installed and configured with your Cloudflare account, along with a subscription to the Workers Paid plan ($5/month as of writing this).