import axios from "axios";

const User = async () => {
  const response = await axios.get("https://randomuser.me/api");
  const user = response.data.results[0];
  console.log(user);
  const template = `
    <div class="card">
      <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}" />
      <div class="card-body">
        <h1>${user.name.first} ${user.name.last}</h1>
        <ul>
          <li>${user.email}</li>
          <li>${user.phone}</li>
          <li>${user.location.city}, ${user.location.state}</li>
        </ul>
      </div>
    </div>
  `;

  return template;
};

export default User;
