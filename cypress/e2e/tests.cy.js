import Data from "./DataHelper/Data"
import Params from "./DataHelper/params"

describe('template spec', () => {
  const data = new Data
  const params = new Params;
  let url = params.url();


  it('Create Dog', () => {
    cy.request({
      method: 'POST',
      url: url + '/v2/pet',
      body: data.bodyPayloadDog()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })


  it('Create Cat', () => {
    cy.request({
      method: 'POST',
      url: url + '/v2/pet',
      body: data.bodyPayloadCat()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Create Bird', () => {
    cy.request({
      method: 'POST',
      url: url + '/v2/pet',
      body: data.bodyPayloadBird()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('update dog photo', () => {
    cy.request({
      method: 'PUT',
      url: url + '/v2/pet',
      body: data.updatePayloadDog("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMecBx0CBg19RNOf9nyN6GzFsc0zSAKMoaf2MSSI1tevIoMzdR")
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('update cat as sold', () => {
    cy.request({
      method: 'PUT',
      url: url + '/v2/pet',
      body: data.updatePayloadCat('sold')
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Check Cat', () => {
    cy.request('GET', url + `/v2/pet/9876`)
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })


  it('Check sold Pets', () => {
    cy.request('GET', url + `/v2/pet/findByStatus?status=sold`)
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Check inventory', () => {
    cy.request('GET', url + `/v2/store/inventory`)
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('DeleteDog', () => {
    cy.request({
      method: 'DELETE',
      url: url + `/v2/pet/267646`,
      headers: data.headerPayload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })


  it('Check Dog', () => {
    cy.request({
      method: 'GET',
      url: url + '/v2/pet/267646',
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.type).to.eq('error');
      })
  })


  it('Order Bird', () => {
    cy.request({
      method: 'POST',
      url: url + '/v2/store/order',
      body: data.orderBird('342553', 1)
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      })
  })

  it('Delete Order Bird', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/store/order/342553'
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      })
  })

  it('Check inventory', () => {

    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/store/inventory'
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      })
  })

})