pragma solidity ^0.4.21;

contract Factory {
    
    uint public FIRCount;
    address[] public deployedFIR;

    function createFIR(string _reporter_id, string _reporter_name, string _reporter_adrs, string _crime_date, string _crime_time, string _crime_location, string _facts) public {
        
        address newFIR = new FIR( _reporter_id,  _reporter_name,  _reporter_adrs,  _crime_date,  _crime_time,  _crime_location,  _facts);
        deployedFIR.push(newFIR);
        FIRCount++;
    }

    function getDeployedFIR() public view returns (address[]) {
        return deployedFIR;
    }
  
}

contract FIR {
    
     string public reporter_id;
     string public reporter_name;
     string public reporter_adrs;
     
     uint public createdOn;
     
     string public crime_date;
     string public crime_time;
     string public crime_location;
     
     string public facts;
     
     uint public status;
     
     function FIR(string _reporter_id, string _reporter_name, string _reporter_adrs, string _crime_date, string _crime_time, string _crime_location, string _facts) public {
        reporter_id = _reporter_id;
        reporter_name = _reporter_name;
        reporter_adrs = _reporter_adrs;
        
        createdOn = now;
        
        crime_date = _crime_date;
        crime_time = _crime_time;
        crime_location = _crime_location;
        facts = _facts;
        
        status = 0;
    }
    
    function started() public {
        status = 1;
    }
    
    function finished() public {
        status = 2;
    }
}