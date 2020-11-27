# Jokest1VE8

**RESTful Endpoints**
---
- `GET /jokes`

**Show Jokes**
---
  Returns array json data of all jokes.

* **URL**

  `/jokes`

* **Method:**

  `GET`

* **Header:**

  `access_token=[string]`
  
*  **URL Params**

   **Required:**
 
   ``


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      [
         {
         "id": 3,
         "imageUrl": "dhakjdhJKH",
         "description": "LSJFAKJFAKLJ",
         "createdAt": "2020-11-26T14:32:38.555Z",
         "updatedAt": "2020-11-26T14:32:38.555Z",
         "UserId": 2
         }
      ]
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:**
    ```json
    {
      "message": "Server Error"
    }
    ```

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
    ```json
    {
      "message": "Please Login First."
    }
    ```

**RESTful Endpoints**
---
- `GET /jokes/userid`

**Show Jokes**
---
  Returns array json data of all jokes by Id of User.

* **URL**

  `/jokes/userid`

* **Method:**

  `GET`

* **Header:**

  `access_token=[string]`
  
*  **URL Params**

   **Required:**
 
   ``


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      [
        {
         "id": 2,
         "imageUrl": "dhakjdhHGAY",
         "description": "LSJHAVGFAKMS",
         "createdAt": "2020-10-26T14:32:38.555Z",
         "updatedAt": "2020-10-26T14:32:38.555Z",
         "UserId": 2
         },{
         "id": 3,
         "imageUrl": "dhakjdhJKH",
         "description": "LSJFAKJFAKLJ",
         "createdAt": "2020-11-26T14:32:38.555Z",
         "updatedAt": "2020-11-26T14:32:38.555Z",
         "UserId": 2
         }
      ]
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:**
    ```json
    {
      "message": "Server Error"
    }
    ```

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
    ```json
    {
      "message": "Please Login First."
    }
    ```


**RESTful Endpoints**
---
- `DELETE /jokes/:id`

**Delete Jokes**
---
  Success Message Delete Confirmation (JSON).

* **URL**

  `/jokes/:id`

* **Method:**

  `DELETE`

* **Header:**

  `access_token=[string]`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
         "message":"Joke Success to dete"
      }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:**
    ```json
    {
      "message": "Server Error"
    }
    ```

  OR

  * **Code:** 404 Not Found <br />
    **Content:**
    ```json
    {
      "message": "Joke Not Found."
    }
    ```

**RESTful Endpoints**
---
- `POST /register`

**Create User**
---
  Returns json data of created user.

* **URL**

  `/register`

* **Method:**

  `POST`

* **Header:**

  `None`
  
*  **URL Params**

   **Required:**
 
   `None`


* **Data Params**

  `firstName=[string]`
  `lastname=[string]`
  `email=[string]`
  `password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
      {
         "data": {
            "id": 3,
            "firstname": "john ",
            "lastname": "wick",
            "email": "johnwick@gmail.com",
            "password": "$2a$10$CMcHoIRAkbovafwaYVqa4uisAyjCkz0B4Lpqvzp/3mE8LTnvxB5RC",
            "updatedAt": "2020-11-26T15:11:16.352Z",
            "createdAt": "2020-11-26T15:11:16.352Z"
            }
      }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:**
    ```json
    {
      "message": "Server Error"
    }
    ```


**RESTful Endpoints**
---
- `POST /login`

**Login User**
---
  Json of access_token.

* **URL**

  `/login`

* **Method:**

  `POST`

* **Header:**

  `none`
  
*  **URL Params**

   **Required:**
 
   ``


* **Data Params**

  `email=[string]`
  `password=[string]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
         {
            "access_token":"slkfjalfjakljflajflakj"
         }
      {
    ```
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:**
    ```json
      {
         {
            "message": "Email/password salah."
         }
      }
    ```

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
    ```json
      {
         {
            "message": "Email/password salah."
         }
      }
    ```


**RESTful Endpoints**
---
- `GET /randomDadJoke`

**Fetch a random dad joke**
---
  Json of a joke.

* **URL**

  `/randomDadJoke`

* **Method:**

  `GET`

* **Header:**

  `none`
  
*  **URL Params**

   **Required:**
 
   ``


* **Data Params**

   `None`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
         {
            "joke":"my joke"
         }
      {
    ```
 
* **Error Response:**


  * **Code:** 500 <br />
    **Content:**
    ```json
      {
         {
            "message": "Server Error"
         }
      }
    ```