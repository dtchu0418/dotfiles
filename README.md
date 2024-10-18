# dotfiles
Some catppuccin based dotfiles for my Hyprland + Arch installation

Includes Python and Bash scripts for waybar, Dunst, Rofi, and more

Uses Greetd autologin with Hyprlock as the lockscreen.

Also includes my Nvim config from scratch with lazy.nvim as the package manager 

The makefile will install all needed packages and fonts automatically :)

Build instructions
1. Copy this repo to your preferred location
2. Run `make installPackages` to install dependencies
3. Copy the config folder `cp ./config ~/.config`
4. *Optional* If you want to copy over greetd config, grub themes, and local desktop files, run `make copyAll`. Otherwise you can run make with `copyLocal copyGreetd copyGrub` separately.
