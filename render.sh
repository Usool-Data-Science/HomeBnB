#!/bin/bash
pip install -r requirements.txt
pip install gunicorn
exec HBNB_TYPE_STORAGE=db gunicorn -w 3 -b 0.0.0.0:5000 api.v1.app:app
