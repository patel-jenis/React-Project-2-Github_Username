import React, { useEffect, useState } from 'react'
import SearchBox from './components/SearchBox';
import Card from './components/Card';
import Btn from './components/Btn';

const App = () => {
    const [query, setQuery] = useState("octocat");
    const [userData, setUserData] = useState({});

    const getQuery = () => {
        let query = document.getElementById("userName").value;
        if (query.trim() === "") {
            alert("Please Enter Username");
            return;
        }
        setQuery(query);
    }

    useEffect(() => {
        const fetchData = async () => {
            const API_URL = `https://api.github.com/users/${query}`;

            let res = await fetch(API_URL);
            let data = await res.json();

            if (data.message === "Not Found") {
                setUserData({ notFound: true });
            } else {
                setUserData(data);
            }
        }
        if (query) {
            fetchData();
        }
    }, [query]);

    let btnData = [
        {
            title: "Visit Profile",
            url: userData.html_url
        },
        {
            title: "Download Card",
        },
    ]

    console.log(userData);

    return (
        <div className="container text-center pt-5">

            <SearchBox getQuery={getQuery} />

            <Card
                notFound={userData.notFound}
                img={userData.avatar_url}
                name={userData.name}
                location={userData.location}
                followers={userData.followers}
                following={userData.following}
                repo={userData.public_repos}
            />

            <div className="d-flex justify-content-center gap-3 mt-4">
                {
                    btnData.map((data) => {
                        return <Btn key={data.title} title={data.title} url={data.url} />
                    })
                }
            </div>

        </div>
    )
}

export default App