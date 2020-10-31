---
id: pricing-limit
title: What happens when i go over the call limit
---

If you go over the daily/monthly call limit your API key will not stop working immediately and you'll get an Email. If this happens frequently, we'll contact you to discuss this. If you go far beyond this daily limit then there is a hard limit to protect our platform from abuse.



Please note that there is also a (permissive) minutely call limit specified in our documentation, which is not reported via Email. If that limit is exceeded you get a bad request (http code 429) and need to delay you requests or buy a bigger package. Currently, this is also a soft limit and we block requests only if you go too much beyond it.