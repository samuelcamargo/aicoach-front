#!/bin/bash

# Encontrar todos os arquivos JS/JSX/TS/TSX e substituir os imports com @/
find ./app ./components ./src -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "@/" | xargs sed -i 's|@/|../../|g' 