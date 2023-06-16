import React from "react";

export default function Profile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    requestData();
  }, []);

  const requestData = async () => {
    try {
      const { data } = await axios("/api/auth/profile", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setData(error.message);
    }
  };

  return <div>Profile: {data?.message} </div>;
}
