---
id: verify-app-details
title: Application Details
---

##
```GET``` Application Details

```
https://verify.barikoi.xyz/application/250
```
Returns a specefic application details along with the sub-tasks and issues if have any. Requries `application_id` in URL parameter.

## API PARAMS

| Parameter       | Value         | Action         |
| -------------   |:-------------:| -------------  |
| application_id  | 250           | Required       |

# Example Response

```
{
  "application": {
    "id": 263,
    "application_id": "SU-3110202002",
    "application_type": 3,
    "applicant_name": "Tanjed Atono",
    "task_ids": "561",
    "start_date": "2020-10-31 14:02:48",
    "sla": "2020-11-01 14:02:48",
    "end_date": null,
    "is_finished": 0,
    "is_verified": 0,
    "agents": null
  },
  "sub_tasks": [
    {
      "id": 561,
      "name": "Tanjed Atono",
      "address": "House 115, Road 1, Block F, Banani, Dhaka",
      "area": "Banani",
      "start_time": null,
      "end_time": null,
      "exact_address": "House 115, Road 1, Block F, Banani, Dhaka",
      "is_verified": 0,
      "assigned_to": null,
      "status": 0,
      "created_at": "2020-10-31 14:02:48",
      "latitude": "23.788063014274606",
      "longitude": "90.40083602070808",
      "place_name": "Bhai Bhai Store",
      "assigned_to_name": null,
      "type": 1,
      "remarks": null,
      "tasker_action": {
        "got_in": null,
        "got_out": null,
        "stayed": null
      },
      "docs": []
    }
  ],
  "status": 200
}
```