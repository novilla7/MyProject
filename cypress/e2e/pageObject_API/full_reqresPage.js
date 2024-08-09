const BASE_URL = "https://reqres.in/";

// Test Case LIST USERS
class List_User {
    static req_ListUsers() {
        cy.request("GET", `${BASE_URL}api/users?page=2`).as('response')
    };

    static status_ListUsers() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(200)
        })
    }

    static status_body_ListUsers() {
        cy.get('@response').then((response) => {
            expect(response.body.data[0].email).to.equal("michael.lawson@reqres.in")
            expect(response.body.data[0].first_name).to.equal("Michael")
        })
    }
}

// Test Case LIST USERS NOT FOUND
class List_User_Not_Found{
    static req_List_User_Not_Found() {
        cy.request({
            method: "GET",
            url: `${BASE_URL}api/users?page=999`,
            failOnStatusCode: false
        }).as('response');
    }

    static status_List_User_Not_Found(){
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(404)
        })
    }

    static status_body_List_User_Not_Found(){
        cy.get('@response').then((response) => {
            expect(response.body.page).to.eq(999)
        })
    }
}


// Test Case SINGLE USERS
class Single_User {
    static req_SingleUsers() {
        cy.request("GET", `${BASE_URL}api/users/2`).as('response')
    }

    static status_SingleUsers() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(200)
        })
    }

    static status_body_SingleUsers() {
        cy.get('@response').then((response) => {
            expect(response.body.data.email).to.equal("janet.weaver@reqres.in")
            expect(response.body.data.first_name).to.equal("Janet")
        })
    }
}

// Test Case SINGLE USERS NOT FOUND
class Single_User_Not_Found {
    static req_Single_User_Not_Found() {
        cy.request({
            method: "GET",
            url: `${BASE_URL}api/users/23`,
            failOnStatusCode: false
        }).as('response')
    }

    /* Dengan menggunakan failOnStatusCode: false, Cypress akan melanjutkan menjalankan 
    tes meskipun menerima respons dengan status kode 400 ke atas. Ini memungkinkan Anda 
    untuk memverifikasi status kode dan respons yang tidak sesuai harapan tanpa menghentikan tes.*/


    static status_Single_User_Not_Found() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(404)
        })
    }

    static status_body_Single_User_Not_Found() {
        cy.get('@response').then((response) => {
            expect(response.body).to.be.empty;
        })
    }
}


// Test Case LIST RESOURCE
class List_Resource {
    static req_List_Resource() {
        cy.request("GET", `${BASE_URL}api/unknown`).as('response')
    }

    static status_List_Resource() {
        cy.get('@response').then((response) => {
            cy.expect(response.status).to.eq(200)
        })
    }

    static status_body_List_Resource() {
        cy.get('@response').then((response) => {
            expect(response.body.data[0].name).to.equal("cerulean")
            expect(response.body.data[0].year).to.equal(2000)
        })
    }
}

// Test Case LIST RESOURCE NOT FOUND
class List_Resource_Not_Found {
    static req_List_Resource_Not_Found() {
        cy.request({
            method: "GET",
            url: `${BASE_URL}api/unknown/999`,
            failOnStatusCode: false
        }).as('response')
    }

    static status_List_Resource_Not_Found() {
        cy.get('@response').then((response) => {
            cy.expect(response.status).to.eq(404)
        })
    }

    static status_body_List_Resource_Not_Found() {
        cy.get('@response').then((response) => {
            expect(response.body).to.be.empty;
        })
    }
}


// Test Case SINGLE RESOURCE 
class Single_Resource {
    static req_Single_Resource() {
        cy.request("GET", `${BASE_URL}api/unknown/2`).as('response')
    }

    static status_Single_Resource() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(200)
        });
    }

    static status_body_Single_Resource() {
        cy.get('@response').then((response) => {
            expect(response.body.data.name).to.equal("fuchsia rose")
            expect(response.body.data.year).to.equal(2001)
        })
    }
}

// Test Case SINGLE RESOURCE NOT FOUND
class Single_Resource_Not_Found {
    static req_Single_Resource_Not_Found() {
        cy.request({
            method: "GET",
            url: `${BASE_URL}api/unknown/23`,
            failOnStatusCode: false
        }).as('response')
    }

    static status_Single_Resource_Not_Found() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(404)
        })
    }

    static status_body_Single_Resource_Not_Found() {
        cy.get('@response').then((response) => {
            expect(response.body).to.be.empty;
        })
    }
}

// Test Case CREATE 
class Create {
    static req_Create() {
        cy.request({
            method: 'POST',
            url: `${BASE_URL}api/users`,
            body: {
                name: "morpheus",
                job: "leader"
            }
        }).as('response')
    }

    static status_Create() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(201)
        })
    }

    static status_body_Create() {
        cy.get('@response').then((response) => {
            expect(response.body.name).to.equal("morpheus")
            expect(response.body.job).to.equal("leader")
        })
    }
}

// Test Case Create Missing Required Fields
class Create_Missing_Required {
    static req_Create_Missing() {
        cy.request({
            method: 'POST',
            url: `${BASE_URL}api/users`,
            body: {
                name: "lily",
                failOnStatusCode: false
            }
        }).as('response')
    }

    static status_Create_Missing() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(400)
        })
    }

    static status_body_Create_Missing() {
        cy.get('@response').then((response) => {
            expect(response.body.job).to.equal("Missing job")
        })
    }
}

// Test Case UPDATE 
class Update {
    static req_Update() {
        cy.request({
            method: "PUT",
            url: `${BASE_URL}api/users/2`,
            body: {
                name: "morpheus",
                job: "zion resident"
            }
        }).as('response')
    }

    static status_Update() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(200)
        })
    }

    static status_body_update() {
        cy.get('@response').then((response) => {
            expect(response.body.name).to.equal("morpheus")
            expect(response.body.job).to.equal("zion resident")
        })
    }
}

// Test Case DELETE
class Delete {
    static req_Delete() {
        cy.request("DELETE", `${BASE_URL}api/users/2`).as('response')
    }

    static status_Delete() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(204)
        })
    }

    static status_body_Delete() {
        cy.get('@response').then((response) => {
            expect(response.body).to.be.empty;
        })
    }
}

// Test Case Succsessfull Registrasi // harusnya registrasi di url nya

class Registrasi_Successfully {
    static req_Registrasi_Successfully() {
        cy.request({
            method: 'POST',
            url: `${BASE_URL}api/register`,
            body: {
                email: "eve.holt@reqres.in",
                password: "pistol"
            }
        }).as('response')
    }

    static status_Registrasi_Successfully() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(200)
        })
    }

    static status_body_Registrasi_Successfully() {
        cy.get('@response').then((response) => {
            expect(response.body.id).to.equal(4)
            expect(response.body.token).to.equal("QpwL5tke4Pnpja7X4")
        })
    }


}

// Test Case Unsuccsessfull Registrasi

class Unsuccsessfull_Registrasi {
    static req_Unsuccsessfull_Registrasi() {
        cy.request({
            method: "POST",
            url: `${BASE_URL}api/register`,
            body: {
                email: "annaelsa@gmail.com"
            },
            failOnStatusCode: false
        }).as('response')
    }

    static status_Unsuccsessfull_Registrasi() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(400)
        })
    }

    static status_body_Unsuccsessfull_Registrasi() {
        cy.get('@response').then((response) => {
            expect(response.body.error).to.equal("Missing password")
        })
    }
}


// Test Case Login Successfully

class Login_Successfully {
    static req_Login_Successfully() {
        cy.request({
            method: "POST",
            url: `${BASE_URL}api/login`,
            body: {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
        }).as('response')
    }

    static status_Login_Successfully() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(200)
        })
    }

    static status_body_Login_Successfully() {
        cy.get('@response').then((response) => {
            expect(response.body.token).to.equal("QpwL5tke4Pnpja7X4")
        })
    }
}

// Test Case Login Unsuccessfully

class Login_Unsuccessfully {
    static req_Login_Unsuccessfully() {
        cy.request({
            method: "POST",
            url: `${BASE_URL}api/login`,
            body: {
                email: "peter@klaven"
            },
            failOnStatusCode: false
        }).as('response')
    }

    static status_Login_Unsuccessfully() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(400)
        })
    }

    static status_body_Login_Unsuccessfully() {
        cy.get('@response').then((response) => {
            expect(response.body.error).to.equal("Missing password")
        })
    }
}

// Test Case Delay Response

class Delay_Response {
    static req_Delay_Response() {
        cy.request("GET", `${BASE_URL}api/users?delay=3`).as('response')
    }

    static status_Delay_Response() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(200)
        })
    }

    static status_body_Delay_Response() {
        cy.get('@response').then((response) => {
            expect(response.body.data[0].email).to.equal("george.bluth@reqres.in")
            expect(response.body.data[0].first_name).to.equal("George")
        })
    }
}




export default {
    List_User, Single_User, Single_User_Not_Found,
    List_Resource, Single_Resource, Single_Resource_Not_Found, Create, Update, Delete, Registrasi_Successfully,
    Unsuccsessfull_Registrasi, Login_Successfully, Login_Unsuccessfully, Delay_Response, List_User_Not_Found, List_Resource_Not_Found, Create_Missing_Required
};


