class Data{
    headerPayload() {
        const headerBody = {
            "accept": "application/json",
            "Content-Type": "application/json"
        }
        return headerBody;
    }

    bodyPayloadDog() {
        const postData =  {
            "id": 267646,
            "category": {
              "id": 267646,
              "name": "dog"
            },
            "name": "Shiro",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 267646,
                "name": "maltese"
              }
            ],
            "status": "available"
          }
        return postData;
    }
    
    bodyPayloadCat() {
        const postData ={
            "id": 9876,
            "category": {
              "id": 9876,
              "name": "cat"
            },
            "name": "Zyra",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 9876,
                "name": "Tekir"
              }
            ],
            "status": "available"
          }
        return postData;
    }


    updatePayloadDog(url) {
        const postData = {
            "id":267646,
            "category": {
              "id":267646,
              "name": "dog"
            },
            "name": "Shiro",
            "photoUrls": [
              url
            ],
            "tags": [
              {
                "id":267646,
                "name": "maltese"
              }
            ],
            "status": "available"
          }
        return postData;
    }

    updatePayloadCat(sts) {
        const postData ={
            "id":9876,
            "category": {
              "id":9876,
              "name": "cat"
            },
            "name": "Zyra",
            "photoUrls": [
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/330px-Cat_November_2010-1a.jpg"
            ],
            "tags": [
              {
                "id":9876,
                "name": "Tekir"
              }
            ],
            "status":sts 
          }
        return postData;
    }

    bodyPayloadBird() {
      const postData ={
        "id": 342553,
        "category": {
          "id": 342553,
          "name": "string"
        },
        "name": "Birdie",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "Maviş"
          }
        ],
        "status": "available"
      }
      return postData;
  }

  orderBird(id,quantity) {
    const postData ={
      "id":id,
      "petId": id,
      "quantity": quantity,
      "shipDate": "2024-08-07T11:22:36.133Z",
      "status": "placed",
      "complete": true
    }
    return postData;
}

orderBird(id,quantity) {
  const postData ={
    "id":id,
    "petId": id,
    "quantity": quantity,
    "shipDate": "2024-08-07T11:22:36.133Z",
    "status": "placed",
    "complete": true
  }
  return postData;
}

}
export default Data