#!/bin/sh

rm -rf  docs/*
compodoc -p tsconfig.doc.json -d ./docs -s -r 9000