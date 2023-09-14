package featureSteps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

public class TestPetStore {

    AddPet pet;

    final static String url = "https://petstore.swagger.io/v2/pet";

    @Given("^I open the swagger endpoint$")
    public void iOpenTheSwaggerEndpoint() {
        String url = "https://petstore.swagger.io/v2/pet/";
    }

    @When("^I search for all pets available with a name and id$")
    public void iSearchForAllPetsAvailableWithANameAndId() {

        System.out.println("===============Returning available Pets==================");


        boolean foundPet = false;
        String searchfor = "doggie";

        if(foundPet == false) {

            given()
                    .get(url + "/12")
                    .then()
                    .statusCode(200)
                    .and()
                    .body("name", equalTo(searchfor));

            foundPet = true;


        }
        else {
            foundPet = false;
        }

        System.out.println("Displays " + foundPet + " since it found the queried pet");

    }

    @And("^I add a pet with auto generated name and make it available on list$")
    public void iAddAPetWithAutoGeneratedNameAndMakeItAvailableOnList(AddPet pet) {



        this.pet = pet;
        int id = /*Math.abs(new Random().nextInt());*/6851654;
        String jsonPet = "{\"id\": " + id + " , \"name\": \""
                + pet.getName() + "\", \"photoUrls\": [], \"status\": \""
                + pet.getStatus() + "\"}";

        given()
                .contentType("application/json")
                .contentType(jsonPet)
                .post("url");

        this.pet.setId(id);

    }

    @Then("^I should get results of my pet when I search with id$")
    public void iShouldGetResultsOfMyPetWhenISearchWithId() {

        given().
                get(url+"/{id}", pet.getId())
                .then().statusCode(200)
                .and().body("name", equalTo(pet.getName()));
    }
}
