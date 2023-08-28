import { query } from "@/lib/datadb";


export async function POST(request:any) {
    const data = await request.json();
    let insured : any ;
    

    let result  : any []= new Array();

    for (let element of data) {
        insured = await query({
            query: "SELECT * FROM `ip_master` where `ssn` = ? and `date_of_birth` =?",
            values: [element.NISNumber,element.DateOfBirth],
        });
        if (Array.isArray(insured) && insured.length !== 0){
            result.push({
                HouseholdID: element.HouseholdID,
                PersonID: element.PersonID,
                NISNumber:  insured[0].ssn.trim(),
                FirstName: insured[0].first_name.trim(),
                MiddleName: insured[0].middle_name.trim(),
                LastName: insured[0].surname.trim(),
                DateOfBirth: element.DateOfBirth
            }); 
        } else {
            result.push({
                HouseholdID: element.HouseholdID,
                PersonID: element.PersonID,
                NISNumber:  element.NISNumber,
                message: "Error in insured information",
                DateOfBirth: element.DateOfBirth
            });
        }
    }

    return new Response(JSON.stringify(result));
}