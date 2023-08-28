export default function handler(req:any, res:any) {
    const inputData = [
      {
        "HouseholdID": 100,
        "PersonID": 1,
        "NISNumber": " QQ123456C "
      },
      {
        "HouseholdID": 100,
        "PersonID": 2,
        "NISNumber": " QQ234567C "
      },
      {
        "HouseholdID": 130, 
        "PersonID": 3,
        "NISNumber": " QQ345678C "
      },
      {
        "HouseholdID": 130,
        "PersonID": 4,
        "NISNumber": " QQ456789C "
      }
    ];
  
    const transformedData = inputData.map(item => ({
      ...item,
      "FirstName": `FN${item.PersonID}`,
      "MiddleName": `MD${item.PersonID}`,
      "DateOfBirth": "649882800000"
    }));
  
    res.status(200).json(transformedData);
  }