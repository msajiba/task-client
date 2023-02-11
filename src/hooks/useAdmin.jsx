import axios from "axios";
import React, { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const email = user?.email;

  const getAdmin = (async) => {
    setIsLoading(true);
    const URL = `http://localhost:5000/api/user/admin/${email}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const isAdmin = data?.admin;
        setAdmin(isAdmin);
        isAdmin && setIsLoading(false);
      });
  };

  useEffect(() => {
    getAdmin();
  }, [user]);

  return [admin, isLoading];
};

export default useAdmin;
