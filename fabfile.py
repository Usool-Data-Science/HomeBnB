#!/usr/bin/env python3
from fabric.api import *

env.use_ssh_config = True
def host_type():
    run('uname -s')
def production():
    env.key_filename = '~/.ssh/alx_intranet_key'
    env.hosts = ['52.91.120.180']
def deploy():
    run("whoami && hostname")
