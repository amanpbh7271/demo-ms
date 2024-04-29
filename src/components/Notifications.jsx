import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IncDetails from "./IncDetails.jsx";
import { Button } from 'react-bootstrap';
import IncidentForm from './IncidentForm.js';
import axios from "axios";
const Container = styled.div`
  background-color: #d3d3d3;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #00c3ffd9;
  padding: 12px;
`;

const HeaderContent = styled.span`
  color: white;
`;

const SearchAndContentWrp = styled.div`
  display: flex;
`;

const LeftContent = styled.div`
  height: 100%;
  width: 25%;
  margin: 0.5rem;
  background-color: white;
`;

const RightContent = styled.div``;

const ListOfInc = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

const ParticularInc = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  margin: 10px;
  cursor: pointer;
`;

const ItemName = styled.div``;

const ItemId = styled.div``;

const ItemPriority = styled.div``;

const SearchField = styled.input`
  width: 100%;
  padding: 4px;
`;

export default function Notifications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentInc, setCurrentInc] = useState(null);
  const [newInc,setNewInc] = useState(false);
  const [apiData, setApiData] = useState([]);
  const userData={
    userName:"Amar"
  }
  const IncDetailsData=[
    {
   IncNumber:112312,
   Account:"Three IreLand",
   Status:"Closed",
   IssueOwner:"Amdocs",
   ReportedDate:"20 feb 2024",
   ReportedTime:"15:30",
   IssueDescription:"this was genrted because ...",
   BusinessImpact:"this will effect ..",
   ImpactedApplication: "DSS, Tivoli",
   WorkAround:"Please kill job id",
   StatusUpdate:"...",
   NextUpdate:"15:30",
   priority:"p1",
   BridgeDeatils:"ww.joinbrifge",
   NotificationManager:"Bharti"
    },
    {
    IncNumber:112314,
    Account:"UK",
   Status:"Closed",
   IssueOwner:"Amdocs",
   ReportedDate:"20 feb 2024 15:30",
   ReportedTime:"",
   IssueDescription:"this was genrted because ...",
   BusinessImpact:"this will effect ..",
   ImpactedApplication: "DSS, Tivoli",
   WorkAround:"Please kill job id",
   StatusUpdate:"...",
   NextUpdate:"15:30",
   priority:"p1",
   BridgeDeatils:"ww.joinbrifge",
   NotificationManager:"Amar"
    },{
      IncNumber:112322,
     Account:"Three IreLand",
   Status:"open",
   IssueOwner:"Amdocs",
   ReportedDate:"20 feb 2024",
   ReportedTime:"15:30",
   IssueDescription:"this was genrted because ...",
   BusinessImpact:"this will effect ..",
   ImpactedApplication: "DSS, Tivoli",
   WorkAround:"Please kill job id",
   StatusUpdate:"...",
   NextUpdate:"15:30",
   priority:"p1",
   BridgeDeatils:"ww.joinbrifge",
   NotificationManager:"Sachin"
    },
    {
      IncNumber:112315,
     Account:"UK ",
   Status:"Open",
   IssueOwner:"Amdocs",
   ReportedDate:"20 feb 2024",
   ReportedTime:"15:30",
   IssueDescription:"this was genrted because ...",
   BusinessImpact:"this will effect ..",
   ImpactedApplication: "DSS, Tivoli",
   WorkAround:"Please kill job id",
   StatusUpdate:"...",
   NextUpdate:"15:30",
   priority:"p1",
   BridgeDeatils:"ww.joinbrifge",
   NotificationManager:"Amar"
    },
    {
    IncNumber:112112,
    Account:"Three IreLand and UK",
   Status:"Open",
   IssueOwner:"Amdocs",
   ReportedDate:"20 feb 2024",
   ReportedTime:"15:30",
   IssueDescription:"this was genrted because ...",
   BusinessImpact:"this will effect ..",
   ImpactedApplication: "DSS, Tivoli",
   WorkAround:"Please kill job id",
   StatusUpdate:"...",
   NextUpdate:"15:30",
   priority:"p1",
   BridgeDeatils:"ww.joinbrifge",
   NotificationManager:"Amar"
    }
  ]

  

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredResults = apiData.filter((item) =>
    item.notifications.incNumber.toString().includes(value)
    );
   // const filteredData = apiData.filter(item => item.notifications.incNumber === incId);
    setSearchResults(filteredResults);
  };

  const handleCurrentInc = (incId) => {
    
    console.log('apidata in handlecurretn inc' +apiData);

    const filteredData = apiData.filter(
       (item) => item.notifications.incNumber === incId);
    setCurrentInc(filteredData);
    console.log('filteringCurrentInc '+ filteredData);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleCloseInc = () => {
    setCurrentInc(null);
  };

  function raiseNewInc (){
    setNewInc(!newInc);
    //navigate("/IncidentForm");
  }

  // useEffect(() => {
  //   const showNotification = () => {

        
  //           new Notification('Hello, World please check ');
  //   };

  //   const timer = setTimeout(showNotification, 1 * 6 * 1000); // 10 minutes in milliseconds

  //   return () => clearTimeout(timer);
  // }, []);


  useEffect(() => {
     
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/api/incDetailsForManager/Amar');
        //await fetch('http://localhost:8080/api/incDetailsForManager/John Doe')
        // /http://localhost:8080/api/logout/Sachin
       // const parsedData = JSON.parse(response);
        //const data = await response.json();
       // alert(parsedData);

      const clonedResponse = response.clone(); // Clone the response
      const data = await clonedResponse.json();
      setApiData(data);

       return response.text();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    fetchData().then(data => {
     
      let fetchedData = data;

     // setApiData(data);
      console.log('Set APi data',apiData);
      console.log('API Data:', data);
     
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  
    const timer = setInterval(() => {
      // Filter the IncDetailsData based on conditions
      const filteredIncidents = IncDetailsData.filter((incident) => {
        return (
          incident.Status === "Open" &&
          incident.NotificationManager === userData.userName
        );
      });

  

      // If there are matching incidents, show their IncNumbers in an alert
      if (filteredIncidents.length > 0) {
        const incNumbers = filteredIncidents
          .map((incident) => incident.IncNumber)
          .join(", ");
       // alert("these INC are in opened state  "+incNumbers);
       //new Notification("Hello World");
      new Notification("these INC are in opened state  "+incNumbers);
      }
    }, 50 * 6 * 1000); // 1 minute in milliseconds

    return () => clearInterval(timer); // Cleanup function to clear the timer
  }, []); // Empty dependency array, effect runs only once

   

  return (
    <Container>
      <Header>
        <HeaderContent>Incident Notifications</HeaderContent>
        <HeaderContent>Join Incident Bridge</HeaderContent>
      </Header>
      <SearchAndContentWrp>
        <LeftContent>
          <SearchField
            type="text"
            placeholder="Search by ID"
            value={searchTerm}
            onChange={handleSearch}
          />
        <Button onClick={ raiseNewInc }>New INC</Button>
          <ListOfInc style={{ height: "500px", overflow: "auto" }}>
            {searchTerm === ""
              ? Array.isArray(apiData) && apiData.map((notification) => (
                  <ParticularInc
                    key={notification.notifications.incNumber}
                    onClick={() => handleCurrentInc(notification.notifications.incNumber)}
                  >
                    <ItemName>{notification.notifications.incNumber}</ItemName>
                    <ItemId>{notification.notifications.date}  {notification.notifications.time}</ItemId>
                    <ItemPriority>{notification.notifications.priority}</ItemPriority>
                  </ParticularInc>
                ))
              : Array.isArray(apiData) && searchResults.map((notification) => (
                  <ParticularInc
                    key={notification.notifications.incNumber}
                    onClick={() => handleCurrentInc(notification.notifications.incNumber)}
                  >
                    <ItemName>{notification.notifications.incNumber}</ItemName>
                    <ItemId>{notification.notifications.incNumber}</ItemId>
                    <ItemPriority>{notification.notifications.priority}</ItemPriority>
                  </ParticularInc>
                ))}
          </ListOfInc>
        </LeftContent>
        <RightContent>
          {currentInc && (
            <IncDetails data={currentInc} handleCloseInc={handleCloseInc} />
            
          )}
          {newInc && <IncidentForm raiseNewInc={ raiseNewInc}/>}
        
        </RightContent>
      </SearchAndContentWrp>
    </Container>
  );
}