# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Make subpackages available:
__all__ = [
    "admissionregistration",
    "apiextensions",
    "apiregistration",
    "apps",
    "auditregistration",
    "authentication",
    "authorization",
    "autoscaling",
    "batch",
    "certificates",
    "coordination",
    "core",
    "discovery",
    "events",
    "extensions",
    "meta",
    "networking",
    "node",
    "policy",
    "rbac",
    "scheduling",
    "settings",
    "storage",
    "helm",
    "provider",
    "yaml",
]

# Expose the provider directly.
from .provider import Provider

from .yaml import ConfigFile
