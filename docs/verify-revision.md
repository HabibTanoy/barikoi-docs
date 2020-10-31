---
id: verify-revision
title: Request Revision
---

##
```PUT``` Request Revision

```
https://verify.barikoi.xyz/request/revision/563
```
If the verification result is not satisfactory then user can request for a re-verify. Requires `task_id` as URL parameter. `task_id` represents the id of the sub-task of an application.

| Parameter       | Value         | Action         |
| -------------   |:-------------:| -------------  |
| task_id         | 563          | Required       |

## Example Response

```
{
  "message": "Request for revision successful",
  "status": 200
}
```
