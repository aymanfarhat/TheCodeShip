Title: Sudden S3 Boto authorisation error on server? Might need to sync up the time!
Date: 2016-05-22 15:03
Slug: sudden-s3-boto-authorisation-error-on-server-might-need-to-sync-up-the-time

I usually have a couple cron jobs scheduled, executing backup scripts
between EC2 instances and store the data on S3 via Python's
[Boto](https://github.com/boto/boto) library. Everything was running
smoothly for several months until one day, the script was failing to
authenticate with a 403 error from AWS S3, on a ...

</p>

