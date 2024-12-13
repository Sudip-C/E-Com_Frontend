# E-Com_Frontend

## Deployed URL: https://ecomag.netlify.app/

Displaying Products based on the catagory.
I have added filter by name, category and sort by price


### BASE API: https://e-com-backendnode-app.onrender.com/api/product

#### GET /getPRODUCT ---- for getting all products.

### GET /filter ? --- then use the below params

| Param   | Type   | Example        |  Descripton                                   |
|--------:|:------:| --------------:|----------------------------------------------:|
|search   | string | search=italian |  get all the product that has italian in name |
|sort     | string | sort=asc       | sort product price low to high                |
|category | string | catgory=Bed    | sort product based on Bed category            |