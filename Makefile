run:
	rm packages.*
	pacman -Qqs > packages.`date +%g%m%d%M`
	git add --all
