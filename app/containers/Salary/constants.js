export const FAILURE = "FAILURE";

export const LOAD_POSITION_LISTING = "LOAD_POSITION_LISTING";
export const POSITION_LISTING_SUCCESS = "POSITION_LISTING_SUCCESS";

export const LOAD_LOCATIONS = "LOAD_LOCATIONS"
export const LOAD_LOCATIONS_SUCCESS = "LOAD_LOCATIONS_SUCCESS"


let ApiConstants = {
    BASEURL: "https://www.monster.com/",
    LOCATIONSURL: "Services/Locations.asmx/GetTrovixLocationsCompletionList",
    // TODO
    // need to update POSITIONURL according to the new api when it is ready, now it is just a test api to test the functcionality and make sure it is saving the data in the store. 
    POSITIONURL: "https://jsonplaceholder.typicode.com/users"

}
export default ApiConstants;