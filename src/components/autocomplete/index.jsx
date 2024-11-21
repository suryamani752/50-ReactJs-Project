import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

const AutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [showDropDown, setDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length >= 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setDropDown(true);
    } else {
      setDropDown(false);
    }
    // console.log(filteredUsers);
  }
  function handleClick(event) {
    setDropDown(false);
    setSearchParams(event.target.innerText);
    setFilteredUsers([]);
  }

  async function fetchUserData() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const responseData = await response.json();
      // console.log(responseData.users);
      if (responseData && responseData.users && responseData.users.length) {
        // console.log(responseData.users);
        setUsers(responseData.users.map((userItem) => userItem.firstName));
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchUserData();
  }, []);
  // console.log(users);
  return (
    <div className="px-4 py-5 mt-5">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl">Loading Data! please wait.....</p>
        </div>
      ) : (
        <input
          className="border-2 px-5 py-4"
          type="text"
          name="search-users"
          value={searchParams}
          placeholder="Search Users here..."
          onChange={handleChange}
        />
      )}
      {showDropDown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
};

export default AutoComplete;
