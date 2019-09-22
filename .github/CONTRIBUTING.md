# Contributing

## Install dev tools
You need to install a few tools to use this repository,
which can be done via `make setup` and setting up your virtual environment.

## Setup a virtual environment
```
# Ensure you are using python 3.7
python -m venv  .venv
source .venv/bin/activate
```

## Install requirements
```
pip install -r requirements.txt
```

## Useful make commands
```
Makefile for a pelican Web site                                           
                                                                          
Usage:                                                                    
   make html                           (re)generate the web site          
   make clean                          remove the generated files         
   make regenerate                     regenerate files upon modification 
   make publish                        generate using production settings 
   make serve [PORT=8000]              serve site at http://localhost:8000
   make serve-global [SERVER=0.0.0.0]  serve (as root) to :80    
   make devserver [PORT=8000]          start/restart develop_server.sh    
   make stopserver                     stop local server                  
   make ssh_upload                     upload the web site via SSH        
   make rsync_upload                   upload the web site via rsync+ssh  
   make dropbox_upload                 upload the web site via Dropbox    
   make ftp_upload                     upload the web site via FTP        
   make s3_upload                      upload the web site via S3         
   make cf_upload                      upload the web site via Cloud Files
   make github                         upload the web site via gh-pages   
                                                                          
Set the DEBUG variable to 1 to enable debugging, e.g. make DEBUG=1 html   
Set the RELATIVE variable to 1 to enable relative urls
```

## IDE setup

- For all IDEs

#### pycharm, goland, intellij

Useful plugins
For auto format on save
- https://plugins.jetbrains.com/plugin/9705-yapf-pycharm

Unresolved import
- https://stackoverflow.com/a/21241988

#### vscode

add this to .vscode/settings.json
```json
{
    "python.pythonPath": ".venv/bin/python",
    "python.linting.pylintEnabled": true,
    "python.linting.enabled": true,
    "python.autoComplete.extraPaths": [
        "./src"
    ]
}
```
