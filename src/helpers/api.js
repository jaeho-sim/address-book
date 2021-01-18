export const fetchContactData = async () => {
  const response = await fetch('https://randomuser.me/api/?results=10&seed=fa68f06333af18b7');
  return await response.json();
}