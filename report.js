$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dogbreed.feature");
formatter.feature({
  "line": 1,
  "name": "Retrieve dog information",
  "description": "",
  "id": "retrieve-dog-information",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Fetching all information related to a dog breed",
  "description": "",
  "id": "retrieve-dog-information;fetching-all-information-related-to-a-dog-breed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open the dog api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for a non-existing dog breed an error must be returned",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify that a bulldog exist from the list of all dogs",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I retrieve all sub-breeds for bulldogs and their respective images",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDogbreeds.iOpenTheDogApiEndpoint()"
});
formatter.result({
  "duration": 403678961,
  "status": "passed"
});
formatter.match({
  "location": "TestDogbreeds.iSearchForANonExistingDogBreedAnErrorMustBeReturned()"
});
formatter.result({
  "duration": 3560615135,
  "status": "passed"
});
formatter.match({
  "location": "TestDogbreeds.iVerifyThatABulldogExistFromTheListOfAllDogs()"
});
formatter.result({
  "duration": 1495563345,
  "status": "passed"
});
formatter.match({
  "location": "TestDogbreeds.iRetrieveAllSubBreedsForBulldogsAndTheirRespectiveImages()"
});
formatter.result({
  "duration": 334819365,
  "status": "passed"
});
formatter.uri("getAllPets.feature");
formatter.feature({
  "line": 1,
  "name": "Retrieve all pets",
  "description": "",
  "id": "retrieve-all-pets",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Fetching all pets and confirm name and id from list and create a new pet to search",
  "description": "",
  "id": "retrieve-all-pets;fetching-all-pets-and-confirm-name-and-id-from-list-and-create-a-new-pet-to-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I open the swagger endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for all pets available with a name and id",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I add a pet with auto generated name and make it available on list",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get results of my pet when I search with id",
  "keyword": "Then "
});
formatter.match({
  "location": "TestPetStore.iOpenTheSwaggerEndpoint()"
});
formatter.result({
  "duration": 97201,
  "status": "passed"
});
formatter.match({
  "location": "TestPetStore.iSearchForAllPetsAvailableWithANameAndId()"
});
formatter.result({
  "duration": 392157630,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path name doesn\u0027t match.\nExpected: doggie\n  Actual: Fido\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:499)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:684)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:262)\n\tat io.restassured.specification.ResponseSpecification$body$1.callCurrent(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\n\tat io.restassured.specification.ResponseSpecification$body$1.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:109)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:244)\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:298)\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\n\tat featureSteps.TestPetStore.iSearchForAllPetsAvailableWithANameAndId(TestPetStore.java:38)\n\tat ✽.When I search for all pets available with a name and id(getAllPets.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "TestPetStore.iAddAPetWithAutoGeneratedNameAndMakeItAvailableOnList(AddPet)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestPetStore.iShouldGetResultsOfMyPetWhenISearchWithId()"
});
formatter.result({
  "status": "skipped"
});
});