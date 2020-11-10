##################################################################################
# VARIABLES
##################################################################################
variable "basename" {
  type        = string
  description = "The base name for all resources"
  default     = "pdf2webform"
}

variable "location" {
  type        = string
  description = "Azure region where to create resources."
  default     = "uksouth"
}

##################################################################################
# Terraform Version & PROVIDERS
##################################################################################

# Set the terraform required version
terraform {
  required_version = ">= 0.12.6"
}


# Configure the Azure Provider
provider "azurerm" {
  # It is recommended to pin to a given version of the Provider
  version = "2.20.0"
  features {}
}

##################################################################################
# RESOURCES
##################################################################################

# Resource Group
resource "azurerm_resource_group" "rg" {
  name     = "${var.basename}rg"
  location = var.location
}

# ACR
resource "azurerm_container_registry" "acr" {
  name                = "${var.basename}acr"
  location            = var.location
  resource_group_name = azurerm_resource_group.rg.name
  sku                      = "Basic"
  admin_enabled            = true
}

##################################################################################
# OUTPUT
##################################################################################

output "AZURE_CONTAINER_REGISTRY_SERVER" {
  value = azurerm_container_registry.acr.login_server
}