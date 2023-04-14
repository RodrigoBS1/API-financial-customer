##LAB API clients contact for financial Advice

This is an API with the list of financial advisory clients / contact

Below are the request methods;

`/names` - GET
- Return a list all clients

`/names/:id` - GET
- Return a single client by its id
    - example response from `/names/2`:

```
{
    "id": "3",
    "name": "Joshua Drake",
    "phone": "1-556-667-7192",
    "email": "fusce@aol.edu",
    "address": "8301 Ipsum. St."
},
```

`/names` - POST
- Accepts a `names` object
    - example object:

```
{
    "id": "3",
    "name": "Joshua Drake",
    "phone": "1-556-667-7192",
    "email": "fusce@aol.edu",
    "address": "8301 Ipsum. St."
},
```