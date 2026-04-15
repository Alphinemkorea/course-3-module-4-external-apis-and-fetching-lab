const postList = document.getElementById("post-list");

function displayPosts(posts) {
    postList.innerHTML = "";

    posts.forEach(post => {
        const li = document.createElement("li");

        const title = document.createElement("h1"); // REQUIRED
        title.textContent = post.title;
        const postList = document.getElementById("post-list");
        const input = document.querySelector("input");
        const button = document.querySelector("button");

        function displayAlerts(alerts) {
            postList.innerHTML = "";

            alerts.forEach(alert => {
                const li = document.createElement("li");

                const title = document.createElement("h1");
                title.textContent = alert.properties.headline;

                const body = document.createElement("p");
                body.textContent = alert.properties.description;

                li.appendChild(title);
                li.appendChild(body);

                postList.appendChild(li);
            });
        }

        button.addEventListener("click", async () => {
            const state = input.value;

            try {
                const response = await fetch(`https://api.weather.gov/alerts/active?area=${state}`);
                const data = await response.json();

                displayAlerts(data.features); // ✅ FIX HERE

                input.value = ""; // ✅ clears input (TEST REQUIREMENT)

            } catch (error) {
                console.error(error);
            }
        });
        const body = document.createElement("p");
        body.textContent = post.body;

        li.appendChild(title);
        li.appendChild(body);

        postList.appendChild(li);
    });
}

async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await response.json();

        displayPosts(data);

    } catch (error) {
        console.error(error);
    }
}

// REQUIRED
fetchPosts();