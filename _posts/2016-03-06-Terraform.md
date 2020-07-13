---
title: "Terraform"
categories:
  - IT
tags:
  - Cloud
  - Infrastructure as Code
last_modified_at: 2016-03-06T12:00:00-15:00
---

**[Terraform](https://www.terraform.io/){:target="_blank"}** ([Github](https://github.com/hashicorp/terraform){:target="_blank"}, [Docs](https://www.terraform.io/docs/index.html){:target="_blank"}) is a tool for building, changing, and versioning infrastructure safely and efficiently. Terraform can manage existing and popular service providers as well as custom in-house solutions.

- [Example](#example)

Configuration files describe to Terraform the components needed to run a single application or your entire datacenter. Terraform generates an execution plan describing what it will do to reach the desired state, and then executes it to build the described infrastructure. As the configuration changes, Terraform is able to determine what changed and create incremental execution plans which can be applied.

## Example

```terraform
terraform {
  required_version = ">= 0.12, < 0.13"
}

provider "aws" {
  region = "us-east-2"

  # Allow any 2.x version of the AWS provider
  version = "~> 2.0"
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
```