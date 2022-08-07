**1. Create**

RequestURL:
<http://localhost:4000/api/books/>

Request Obj: 
{
    "_id": 1,
 "name": "Harry Potter and the Order of Pheonix",
 "img": "https://bit.ly/2lcnSwz",
 "summary": "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who , in turn look to undermine Dumbledore's authority at Hogwarts and discredit Harry."  
} 	

Response Obj:
{
    "newBook": {
        "_id": 1,
        "name": "Harry Potter and the Order of Pheonix",
        "img": "https://bit.ly/2lcnSwz",
        "summary": "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who , in turn look to undermine Dumbledore's authority at Hogwarts and discredit Harry.",
        "createdAt": "2022-06-29T11:11:41.978Z",
        "updatedAt": "2022-06-29T11:11:41.978Z",
        "__v": 0
    }
}

**2. Read**

A. Find one
Request URL:
<http://localhost:4000/api/books/1>

Response Obj:
{
    "_id": 1,
    "name": "Harry Potter and the Order of Pheonix",
    "img": "https://bit.ly/2lcnSwz",
    "summary": "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who , in turn look to undermine Dumbledore's authority at Hogwarts and discredit Harry.",
    "createdAt": "2022-06-29T11:11:41.978Z",
    "updatedAt": "2022-06-29T11:11:41.978Z",
    "__v": 0
}

B. Find all
Request URL:
<http://localhost:4000/api/books/>

Response Obj:
[
    {
        "_id": 1,
        "name": "Harry Potter and the Order of Pheonix",
        "img": "https://bit.ly/2lcnSwz",
        "summary": "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who , in turn look to undermine Dumbledore's authority at Hogwarts and discredit Harry.",
        "createdAt": "2022-06-29T11:11:41.978Z",
        "updatedAt": "2022-06-29T11:11:41.978Z",
        "__v": 0
    },
    {
        "_id": 2,
        "name": "The Lord of the Rings: The Fellowship of the Ring",
        "img": "https://bit.ly/2tC1Lcg",
        "summary": "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.",
        "createdAt": "2022-06-29T09:41:10.043Z",
        "updatedAt": "2022-06-29T09:41:10.043Z",
        "__v": 0
    }    
]

**3. Update**

Request URL:
<http://localhost:4000/api/books/1>

Request Obj:
{
 "name": "111111 Harry Potter and the Order of Pheonix",
 "img": "https://bit.ly/2lcnSwz",
 "summary": "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who , in turn look to undermine Dumbledore's authority at Hogwarts and discredit Harry."  
} 	

Response Obj:
{
    "_id": 1,
    "name": "111111 Harry Potter and the Order of Pheonix",
    "img": "https://bit.ly/2lcnSwz",
    "summary": "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who , in turn look to undermine Dumbledore's authority at Hogwarts and discredit Harry.",
    "createdAt": "2022-06-29T11:11:41.978Z",
    "updatedAt": "2022-06-29T11:20:38.788Z",
    "__v": 0
}

**4. Delete**

Request URL:
<http://localhost:4000/api/books/1>

Response Obj:
RESPONSE : Book Deleted successfully with ID : 1