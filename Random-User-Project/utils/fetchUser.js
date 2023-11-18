const URL = 'https://randomuser.me/api/';

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  //destructure
  const person = data.results[0];
  const { email, phone } = person;
  const { large: image } = person.picture;
  const { last, first } = person.name;
  const {
    login: { password },
  } = person;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};
export default getUser;
