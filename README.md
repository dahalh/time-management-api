# Time Management Tracker Api

This api is created for Time Management Tracker
This is the link to front end app [link here]

## APIS

All the api will be following the `{rootrurl}/api/v1` format.

### TASK API

`../api/v1/task` resource will provide all task related api.

| #   | Method   | Path    | Description                                                   |
| --- | -------- | ------- | ------------------------------------------------------------- |
| 1.  | `GET`    | `/task` | this will return all the tasks available in the database      |
| 2.  | `POST`   | `/task` | send task object to store in the database                     |
| 2.  | `DELETE` | `/task` | It expects ID of the task and will delete a tas from database |

`../api/v1/user` resource will provide all user related api.

### USER API
