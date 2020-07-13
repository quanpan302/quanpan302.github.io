---
title: "Kubernetes"
categories:
  - SD
tags:
  - Microservice
last_modified_at: 2016-02-03T12:00:00-01:00
---

**[Kubernetes](https://kubernetes.io)** ([Github](https://github.com/kubernetes/kubernetes), [Docs](https://kubernetes.io/docs/concepts/overview/components/)) is a portable, extensible, open-source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation. It has a large, rapidly growing ecosystem. Kubernetes services, support, and tools are widely available.

- [Concepts](#concepts)
  - [Components](#components)
  - [Cluster Architecture](#cluster-architecture)
  - [Containers](#containers)
  - [Workloads](#workloads)
  - [Services, Load Balancing, and Networking](#services-load-balancing-and-networking)
  - [Configuration](#configuration)
  - [Security](#security)
  - [Storage](#storage)
  - [Policies](#policies)
  - [Scheduling and Eviction](#scheduling-and-eviction)
- [Tasks](#tasks)
- [Reference](#reference)
  - [Standardized Glossary](#standardized-glossary)
- [Examples](#examples)
  - [Web UI (Dashboard)](#web-ui-dashboard)

## [Concepts](https://kubernetes.io/docs/concepts/)

### [Components](https://kubernetes.io/docs/concepts/overview/components/)

- Control Plane Components
  - kube-apiserver
  - etcd
  - kube-scheduler
  - kube-controller-manager
  - cloud-controller-manager
- Node Components
  - kubelet
  - kube-proxy
  - Container runtime
- Addons
  - DNS
  - Web UI (Dashboard)
  - Container Resource Monitoring
  - Cluster-level Logging

![](/assets/images/posts/2016-02-03-Kubernetes/components.png)

### [Cluster Architecture](https://kubernetes.io/docs/concepts/architecture/)

### [Containers](https://kubernetes.io/docs/concepts/containers/)

### [Workloads](https://kubernetes.io/docs/concepts/workloads/)

### [Services, Load Balancing, and Networking](https://kubernetes.io/docs/concepts/services-networking/)

### [Storage](https://kubernetes.io/docs/concepts/storage/)

### [Configuration](https://kubernetes.io/docs/concepts/configuration/)

### [Security](https://kubernetes.io/docs/concepts/security/)

### [Policies](https://kubernetes.io/docs/concepts/policy/)

### [Scheduling and Eviction](https://kubernetes.io/docs/concepts/scheduling-eviction/)

## [Tasks](https://kubernetes.io/docs/tasks/)

## [Reference](https://kubernetes.io/docs/reference/)

### [Standardized Glossary](https://kubernetes.io/docs/reference/glossary/)

## Examples

### [Web UI (Dashboard)](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)

#### Deploying the Dashboard UI 

##### Download

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
```

##### [Login](https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md)

For each of the following snippets for **ServiceAccount** and **ClusterRoleBinding**, you should copy them to new manifest files like `dashboard-admin.yaml` and use `kubectl apply -f dashboard-admin.yaml` to create them.

**ServiceAccount**

dashboard-admin.yaml

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard
```

**ClusterRoleBinding**

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard
```

**Getting a Bearer Token**

```bash
kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | grep admin-user | awk '{print $1}')
```

```bash
kubectl create -f dashboard-admin.yaml
```

##### Run locally

```bash
kubectl proxy
```

##### Visit

[127.0.0.1:8001](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/)

#### Delete the Dashboard UI

##### Check

```bash
kubectl get secret,sa,role,rolebinding,services,deployments --namespace=kube-system | grep dashboard
```

##### Delete

```bash
kubectl delete -f https://raw.githubusercontent.com/kubernetes/dashboard/master/aio/deploy/recommended.yaml

kubectl delete deployment kubernetes-dashboard --namespace=kube-system
```
