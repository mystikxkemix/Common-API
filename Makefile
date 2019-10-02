release:
	git checkout master && git merge dev && git push origin master && npm publish
