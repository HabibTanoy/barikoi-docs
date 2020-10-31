---
id: verify-applist
title: Application List
---

##
```GET``` Application List
```
https://verify.barikoi.xyz/applications?dateFrom=2020-07-31&dateTill=2020-10-31&status=2&paginate=20
```
Returns authenticated user group's all requrested applications within a date range.Requires `dateFrom` and `dateTill` as date range and status for filtering the result.Status = 1 will return only finished applications whereas status = 0 it will return only ongoing applications.Status = 2 will return all requrested applications.Applications list api also accepts `paginate` key which will paginate the result. By default result will be paginated by 10.After a successfull request, api will return an object where `data` key will have the applications details. `is_verified` key of a application details will hold the status about the application is verified or not.`is_verified = 1` means the application is verified. `is_verified = 0` means the application is not verified.Another key of an application details `is_finished` which holds the information about the application progress.`is_finished = 0` means the application is still ongoing. `is_finished = 1` means the application has finished.

## API PARAMS

| Parameter    | Value         | Action         |
| -------------|:-------------:| -------------  |
| dateFrom     | 2020-07-31    | Required       |
| dateTill     | 2020-10-31    | Required       |
| status       | 0             | Required       |
| paginate     | 20            |                |

## Example Response

```
{
  "applications": {
    "current_page": 1,
    "data": [
      {
        "id": 265,
        "application_id": "SU-3110202004",
        "application_type": 3,
        "applicant_name": "Tanjed Atono",
        "task_ids": "563",
        "start_date": "2020-10-31 14:20:25",
        "sla": "2020-11-01 14:20:25",
        "end_date": null,
        "is_finished": 0,
        "is_verified": 0,
        "agents": null,
        "report_file": null,
        "issues": []
      }
    ],
    "first_page_url": "https://admin.barikoi.xyz:8090/applications?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://admin.barikoi.xyz:8090/applications?page=1",
    "next_page_url": null,
    "path": "https://admin.barikoi.xyz:8090/applications",
    "per_page": 10,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  }
}
```