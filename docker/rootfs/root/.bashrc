#!/bin/bash

if [ -t 1 ]; then
	export PS1="\e[1;34m[\e[1;33m\u@\e[1;32mdocker-\h\e[1;37m:\w\[\e[1;34m]\e[1;36m\\$ \e[0m"
fi

# Aliases
alias l='ls -lAsh --color'
alias ls='ls -C1 --color'
alias cp='cp -ip'
alias rm='rm -i'
alias mv='mv -i'
alias h='cd ~;clear;'

. /etc/os-release

echo -e -n '\E[1;34m'
figlet -w 120 "NginxProxyManager"
echo -e "\E[1;36mVersion \E[1;32m${NPM_BUILD_VERSION:-2.0.0-dev} (${NPM_BUILD_COMMIT:-dev}) ${NPM_BUILD_DATE:-0000-00-00}\E[1;36m, OpenResty \E[1;32m${OPENRESTY_VERSION:-unknown}\E[1;36m, ${ID:-debian} \E[1;32m${VERSION:-unknown}\E[1;36m, Certbot \E[1;32m$(certbot --version)\E[0m"
echo -e -n '\E[1;34m'
cat /built-for-arch
echo -e '\E[0m'
