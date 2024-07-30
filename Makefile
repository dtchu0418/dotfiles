# Update packages list
packages:
	rm packages.*
	pacman -Qqs > packages.`date +%g%m%d%M`
	git add --all

# Install pacman packages
installPackages:
	pacman -S - < packages.

# Copy .local files
copyLocal:
	cp -r ./local/ ~/.local/

# copy greetd
copyGreetd:
	cp -r ./greetd /etc/greetd/

# copy grub files
copyGrub:
	cp ./grub/grub /etc/default
	cp -r ./grub/themes /usr/share/grub/themes

# Install all
installAll:
	$(MAKE) packages
	$(MAKE) installPackages
	$(MAKE) copyLocal
	$(MAKE) copyGreetd
	$(MAKE) copyGrub
