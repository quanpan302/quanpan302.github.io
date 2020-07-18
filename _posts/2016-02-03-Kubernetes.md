---
title: "Kubernetes"
categories:
  - SD
tags:
  - Microservice
last_modified_at: 2016-02-03T12:00:00-01:00
---

**[Kubernetes](https://kubernetes.io){:target="_blank"}** ([Github](https://github.com/kubernetes/kubernetes){:target="_blank"}, [Docs](https://kubernetes.io/docs/concepts/overview/components/){:target="_blank"}) is a portable, extensible, open-source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation. It has a large, rapidly growing ecosystem. Kubernetes services, support, and tools are widely available.

- [Concepts{:target="_blank"}](#conceptstarget_blank)
  - [Components{:target="_blank"}](#componentstarget_blank)
  - [Cluster Architecture{:target="_blank"}](#cluster-architecturetarget_blank)
  - [Containers{:target="_blank"}](#containerstarget_blank)
  - [Workloads{:target="_blank"}](#workloadstarget_blank)
  - [Services, Load Balancing, and Networking{:target="_blank"}](#services-load-balancing-and-networkingtarget_blank)
  - [Storage{:target="_blank"}](#storagetarget_blank)
  - [Configuration{:target="_blank"}](#configurationtarget_blank)
  - [Security{:target="_blank"}](#securitytarget_blank)
  - [Policies{:target="_blank"}](#policiestarget_blank)
  - [Scheduling and Eviction{:target="_blank"}](#scheduling-and-evictiontarget_blank)
  - [Cluster Administration{:target="_blank"}](#cluster-administrationtarget_blank)
  - [Extending Kubernetes{:target="_blank"}](#extending-kubernetestarget_blank)
- [Tasks{:target="_blank"}](#taskstarget_blank)
- [Reference{:target="_blank"}](#referencetarget_blank)
  - [Standardized Glossary{:target="_blank"}](#standardized-glossarytarget_blank)
- [Examples](#examples)
  - [Web UI (Dashboard){:target="_blank"}](#web-ui-dashboardtarget_blank)
    - [Deploying the Dashboard UI](#deploying-the-dashboard-ui)
      - [Download](#download)
      - [Login{:target="_blank"}](#logintarget_blank)
      - [Run locally](#run-locally)
      - [Visit](#visit)
    - [Delete the Dashboard UI](#delete-the-dashboard-ui)
      - [Check](#check)
      - [Delete](#delete)

## [Concepts](https://kubernetes.io/docs/concepts/){:target="_blank"}

### [Components](https://kubernetes.io/docs/concepts/overview/components/){:target="_blank"}

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

![](/assets/images/posts/2016-02-03-Kubernetes/components.png){:target="_blank"}

### [Cluster Architecture](https://kubernetes.io/docs/concepts/architecture/){:target="_blank"}

### [Containers](https://kubernetes.io/docs/concepts/containers/){:target="_blank"}

### [Workloads](https://kubernetes.io/docs/concepts/workloads/){:target="_blank"}

### [Services, Load Balancing, and Networking](https://kubernetes.io/docs/concepts/services-networking/){:target="_blank"}

### [Storage](https://kubernetes.io/docs/concepts/storage/){:target="_blank"}

### [Configuration](https://kubernetes.io/docs/concepts/configuration/){:target="_blank"}

### [Security](https://kubernetes.io/docs/concepts/security/){:target="_blank"}

### [Policies](https://kubernetes.io/docs/concepts/policy/){:target="_blank"}

### [Scheduling and Eviction](https://kubernetes.io/docs/concepts/scheduling-eviction/){:target="_blank"}

### [Cluster Administration](https://kubernetes.io/docs/concepts/cluster-administration/){:target="_blank"}

### [Extending Kubernetes](https://kubernetes.io/docs/concepts/extend-kubernetes/){:target="_blank"}

## [Tasks](https://kubernetes.io/docs/tasks/){:target="_blank"}

## [Reference](https://kubernetes.io/docs/reference/){:target="_blank"}

### [Standardized Glossary](https://kubernetes.io/docs/reference/glossary/){:target="_blank"}

## Examples

### [Web UI (Dashboard)](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/){:target="_blank"}

#### Deploying the Dashboard UI 

##### Download

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
```

##### [Login](https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md){:target="_blank"}

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
kubectl get secrets
kubectl describe secrets default-token-drrn4

kubectl proxy
```

##### Visit

[127.0.0.1:8001](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/){:target="_blank"}

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
