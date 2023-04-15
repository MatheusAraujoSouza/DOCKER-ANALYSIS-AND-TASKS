#!/bin/bash

echo "Generating a random password..."

# Generate a random password using pwgen
PASSWORD=$(pwgen -s 16 1)

# Output the generated password
echo "Password: $PASSWORD"