#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"

if [[ "$VERCEL_ENV" == "production" ]] ; then
  echo "🛑 - Build cancelled"
  exit 0;
else
  echo "✅ - Build can proceed"
  exit 1;
fi