---
title: "Kubernetes"
categories:
  - SD
tags:
  - Microservice
last_modified_at: 2016-02-03T12:00:00-01:00
---

**[Kubernetes](https://kubernetes.io)** ([Github](https://github.com/kubernetes/kubernetes), [Docs](https://kubernetes.io/docs/concepts/overview/components/)) is a portable, extensible, open-source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation. It has a large, rapidly growing ecosystem. Kubernetes services, support, and tools are widely available.

- [Components](#components)
- [Web UI (Dashboard)](#web-ui-dashboard)
- [Examples](#examples)

## [Components](https://kubernetes.io/docs/concepts/overview/components/)

## [Web UI (Dashboard)](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)

## Examples

[Running Kubernetes locally with Docker on Mac OS X](https://xebia.com/blog/running-kubernetes-locally-docker-mac-os-x/)

```bash
kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml

kubectl proxy

http://127.0.0.1:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/
```

[Creating a kubeconfig file for a self-hosted Kubernetes cluster](http://docs.shippable.com/deploy/tutorial/create-kubeconfig-for-self-hosted-kubernetes-cluster/)

```bash
ls -al $HOME/.kube


```
