#!/bin/bash

for i in {201..202}
do
	$(git checkout -b branch$i)
	$(git push --set-upstream origin branch$i)
done
